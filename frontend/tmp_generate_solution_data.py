import json
from pathlib import Path
import re

root = Path(__file__).resolve().parent
source = root / 'tmp_solutions_data.json'
output = root / 'src' / 'data' / 'solutions' / 'solutionData.ts'

slug_metadata = {
    'aws-cloud': ('cloud', 'Server'),
    'cloud': ('cloud', 'Server'),
    'application-monitoring': ('managed', 'Zap'),
    'managed-services': ('managed', 'Headset'),
    'collaboration': ('workplace', 'Laptop'),
    'software-licensing': ('workplace', 'CheckCircle2'),
    'cyber-security': ('security', 'ShieldCheck'),
    'physical-safety': ('security', 'ShieldCheck'),
    'network': ('networking', 'Network'),
    'passive-network': ('networking', 'Network'),
    'data-centre': ('datacenter', 'Database'),
    'storage-compute': ('datacenter', 'Database'),
    'infrastructure': ('datacenter', 'Layers'),
    'virtualisation': ('datacenter', 'Laptop'),
}

with source.open('r', encoding='utf-8') as f:
    pages = json.load(f)

solutions = []
solution_details = []

for page in pages:
    slug = page['slug']
    category, icon = slug_metadata.get(slug, ('cloud', 'Server'))
    hero_image = '/' + page.get('heroImage', '').lstrip('/') if page.get('heroImage') else ''
    intro = page.get('intro', '')

    key_features = []
    if page.get('services'):
        key_features = [service.get('title', '') for service in page['services'] if service.get('title')]
    elif page.get('sections'):
        for section in page['sections']:
            headings = section.get('headings', [])
            if headings:
                key_features = [h for h in headings if h]
                break

    tech_partners = []
    for partner in page.get('partners', []):
        src = partner.get('src', '')
        if src:
            name = Path(src).stem
            tech_partners.append(' '.join(w.capitalize() for w in re.sub(r'[-_]', ' ', name).split()))
    tech_partners = list(dict.fromkeys(tech_partners))

    services = []
    for service in page.get('services', []):
        services.append({
            'title': service.get('title', ''),
            'description': service.get('description', ''),
            'image': '/' + service.get('image', '').lstrip('/'),
            'imageAlt': service.get('imageAlt', '') or '',
        })

    partners = []
    for partner in page.get('partners', []):
        partners.append({
            'src': '/' + partner.get('src', '').lstrip('/'),
            'alt': partner.get('alt', '') or '',
        })

    sections = []
    for section in page.get('sections', []):
        section_images = []
        for image in section.get('images', []):
            section_images.append({
                'src': '/' + image.get('src', '').lstrip('/'),
                'alt': image.get('alt', '') or '',
            })
        sections.append({
            'classes': section.get('classes', []),
            'headings': section.get('headings', []),
            'paragraphs': section.get('paragraphs', []),
            'lists': section.get('lists', []),
            'images': section_images,
        })

    solutions.append({
        'id': slug,
        'slug': slug,
        'title': page.get('title', ''),
        'shortDescription': intro,
        'fullDescription': intro,
        'iconName': icon,
        'category': category,
        'keyFeatures': key_features,
        'businessBenefits': [],
        'techPartners': tech_partners,
        'heroImage': hero_image,
    })

    solution_details.append({
        'id': slug,
        'slug': slug,
        'title': page.get('title', ''),
        'breadcrumb': page.get('breadcrumb', []),
        'intro': intro,
        'heroImage': hero_image,
        'heroAlt': page.get('heroAlt', '') or '',
        'services': services,
        'partners': partners,
        'sections': sections,
    })

with output.open('w', encoding='utf-8') as f:
    f.write('import { Solution, SolutionDetail } from "../../types";\n\n')
    f.write('export const SOLUTIONS: Solution[] = ')
    json.dump(solutions, f, indent=2, ensure_ascii=False)
    f.write(';\n\n')
    f.write('export const SOLUTION_DETAILS: SolutionDetail[] = ')
    json.dump(solution_details, f, indent=2, ensure_ascii=False)
    f.write(';\n\n')
    f.write('export const SOLUTION_DETAIL_MAP: Record<string, SolutionDetail> = SOLUTION_DETAILS.reduce((map, item) => {\n')
    f.write('  map[item.slug] = item;\n')
    f.write('  return map;\n')
    f.write('}, {} as Record<string, SolutionDetail>);\n')

print(f'Generated {output} with {len(solutions)} solutions and {len(solution_details)} detail items')
