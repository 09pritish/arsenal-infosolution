import json
from pathlib import Path

source = Path('../../tmp_solutions_data.json')
outfile = Path('index.ts')

# Map slug to a display category and icon name for the overview list.
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
    short_desc = intro
    full_desc = intro
    key_features = []
    if page.get('services'):
        key_features = [service.get('title', '') for service in page['services'] if service.get('title')]
    elif page.get('sections'):
        for section in page['sections']:
            headings = section.get('headings', [])
            if headings:
                key_features = [h for h in headings if h]
                break

    partners = []
    for partner in page.get('partners', []):
        src = partner.get('src', '')
        if src:
            partners.append({
                'src': '/' + src.lstrip('/'),
                'alt': partner.get('alt', '') or ''
            })

    services = []
    for service in page.get('services', []):
        services.append({
            'title': service.get('title', ''),
            'description': service.get('description', ''),
            'image': '/' + service.get('image', '').lstrip('/'),
            'imageAlt': service.get('imageAlt', '') or ''
        })

    sections = []
    for section in page.get('sections', []):
        section_images = []
        for image in section.get('images', []):
            section_images.append({
                'src': '/' + image.get('src', '').lstrip('/'),
                'alt': image.get('alt', '') or ''
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
        'shortDescription': short_desc,
        'fullDescription': full_desc,
        'iconName': icon,
        'category': category,
        'keyFeatures': key_features,
        'businessBenefits': [],
        'techPartners': [],
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

output = [
    'import { Solution, SolutionDetail } from "../../types";\n\n',
    'export const SOLUTIONS: Solution[] = ',
    json.dumps(solutions, indent=2, ensure_ascii=False),
    ';\n\n',
    'export const SOLUTION_DETAILS: SolutionDetail[] = ',
    json.dumps(solution_details, indent=2, ensure_ascii=False),
    ';\n\n',
    'export const SOLUTION_DETAIL_MAP: Record<string, SolutionDetail> = SOLUTION_DETAILS.reduce((map, item) => {\n',
    '  map[item.slug] = item;\n',
    '  return map;\n',
    '}, {} as Record<string, SolutionDetail>);\n'
]

with outfile.open('w', encoding='utf-8') as f:
    f.writelines(output)

print(f'Generated {outfile} with {len(solutions)} solutions')
