import os
import glob
import json
from bs4 import BeautifulSoup

root = os.path.abspath(os.path.dirname(__file__))
files = sorted(glob.glob(os.path.join(root, 'output', 'pages', '*.html')))
solution_files = [f for f in files if os.path.basename(f).startswith('solutions-') or os.path.basename(f) == 'aws-cloud.php.html']
data = []

for f in solution_files:
    name = os.path.basename(f)
    with open(f, 'r', encoding='utf-8', errors='ignore') as fh:
        html = fh.read()
    soup = BeautifulSoup(html, 'html.parser')
    for tag in soup.find_all(['nav', 'footer', 'header', 'script', 'style']):
        tag.decompose()
    main = soup.find('div', class_='main-section')
    if not main:
        main = soup
    page = {
        'file': name,
        'slug': None,
        'title': None,
        'breadcrumb': [],
        'intro': None,
        'heroImage': None,
        'heroAlt': None,
        'services': [],
        'partners': [],
        'sections': []
    }
    if name == 'aws-cloud.php.html':
        page['slug'] = 'aws-cloud'
    else:
        page['slug'] = name.replace('solutions-', '').replace('.php.html', '')
    top = main.find('section', class_='top-heading-section')
    if top:
        h1 = top.find('h1')
        if h1:
            page['title'] = h1.get_text(' ', strip=True)
        ul = top.find('ul')
        if ul:
            page['breadcrumb'] = [li.get_text(' ', strip=True) for li in ul.find_all('li')]
    hero_sec = None
    for section in main.find_all('section', class_='section-row'):
        if section.find('h1') and section.find('img'):
            hero_sec = section
            break
    if hero_sec:
        h1 = hero_sec.find('h1')
        if h1:
            page['title'] = h1.get_text(' ', strip=True)
        p = hero_sec.find('p')
        if p:
            page['intro'] = p.get_text(' ', strip=True)
        img = hero_sec.find('img')
        if img and img.get('src'):
            page['heroImage'] = img.get('src').strip()
            page['heroAlt'] = img.get('alt','').strip()
    for section in main.find_all('section', class_='section-row'):
        services = []
        for item in section.find_all(class_=lambda x: x and 'service-points-wrapper' in x):
            h5 = item.find('h5')
            p = item.find('p')
            img = item.find('img')
            services.append({
                'title': h5.get_text(' ', strip=True) if h5 else None,
                'description': p.get_text(' ', strip=True) if p else None,
                'image': img.get('src').strip() if img and img.get('src') else None,
                'imageAlt': img.get('alt','').strip() if img else None,
            })
        if services:
            page['services'].extend(services)
    partners_section = None
    for section in main.find_all('section', class_='section-row'):
        if section.find('h1') and 'Partner' in section.get_text():
            partners_section = section
            break
    if partners_section:
        for img in partners_section.find_all('img'):
            src = img.get('src','').strip()
            if src:
                page['partners'].append({'src': src, 'alt': img.get('alt','').strip()})
    for section in main.find_all(['section', 'div'], class_=lambda x: x and 'section-row' in x):
        sec = {
            'classes': section.get('class', []),
            'headings': [h.get_text(' ', strip=True) for h in section.find_all(['h1','h2','h3','h4','h5','h6'])],
            'paragraphs': [p.get_text(' ', strip=True) for p in section.find_all('p')],
            'lists': [[li.get_text(' ', strip=True) for li in ul.find_all('li')] for ul in section.find_all('ul')],
            'images': [{'src': img.get('src','').strip(), 'alt': img.get('alt','').strip()} for img in section.find_all('img') if img.get('src')]
        }
        if sec['headings'] or sec['paragraphs'] or sec['lists'] or sec['images']:
            page['sections'].append(sec)
    data.append(page)

with open(os.path.join(root, 'tmp_solutions_data.json'), 'w', encoding='utf-8') as out:
    json.dump(data, out, indent=2, ensure_ascii=False)
print('Wrote tmp_solutions_data.json with', len(data), 'pages')
