import json
from pathlib import Path

source = Path('../../tmp_solutions_data.json')
output = Path('solutionDetails.ts')

with source.open('r', encoding='utf-8') as f:
    pages = json.load(f)

for page in pages:
    page['heroImage'] = '/' + page.get('heroImage', '').lstrip('/')
    page['shortDescription'] = page.get('intro', '')
    page['fullDescription'] = page.get('intro', '')
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

content = [
    'import { SolutionDetail } from "../types";\n',
    'export const SOLUTION_DETAILS: SolutionDetail[] = ',
    json.dumps(pages, indent=2, ensure_ascii=False),
    ';\n',
    '\n',
    'export const SOLUTION_DETAIL_MAP: Record<string, SolutionDetail> = SOLUTION_DETAILS.reduce((map, item) => {\n',
    '  map[item.slug] = item;\n',
    '  return map;\n',
    '}, {} as Record<string, SolutionDetail>);\n'
]

with output.open('w', encoding='utf-8') as f:
    f.writelines(content)

print(f'Generated {output} with {len(pages)} solution details')
