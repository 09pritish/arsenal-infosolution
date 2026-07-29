import json
from pathlib import Path
import os

def title_case(text):
    return ' '.join(w.capitalize() for w in text.replace('_',' ').replace('-', ' ').split())

tmp = Path('tmp_solutions_data.json')
out = Path('src/data/solutionData.ts')
with tmp.open('r', encoding='utf-8') as f:
    pages = json.load(f)
for page in pages:
    page['heroImage'] = '/' + page['heroImage'].lstrip('/')
    page['shortDescription'] = page.get('intro', '')
    page['fullDescription'] = page.get('intro', '')
    page['businessBenefits'] = []
    if page.get('services'):
        page['keyFeatures'] = [item.get('title', '') for item in page['services'] if item.get('title')]
    else:
        first_headings = []
        if page.get('sections'):
            for sec in page['sections']:
                for heading in sec.get('headings', []):
                    if heading:
                        first_headings.append(heading)
                        break
                if first_headings:
                    break
        page['keyFeatures'] = first_headings or []
    page['techPartners'] = []
    for partner in page.get('partners', []):
        src = partner.get('src', '')
        if src:
            name = os.path.splitext(os.path.basename(src))[0]
            page['techPartners'].append(title_case(name))
    for service in page.get('services', []):
        service['image'] = '/' + service.get('image', '').lstrip('/')
        service['imageAlt'] = service.get('imageAlt', '') or ''
    for partner in page.get('partners', []):
        partner['src'] = '/' + partner.get('src', '').lstrip('/')
        partner['alt'] = partner.get('alt', '')
    for section in page.get('sections', []):
        for image in section.get('images', []):
            image['src'] = '/' + image.get('src', '').lstrip('/')
            image['alt'] = image.get('alt', '')

with out.open('w', encoding='utf-8') as f:
    f.write('import { Solution } from "../types";\n\n')
    f.write('export const SOLUTIONS: Solution[] = ')
    json.dump(pages, f, indent=2, ensure_ascii=False)
    f.write(';\n')
