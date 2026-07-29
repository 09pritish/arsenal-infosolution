import os
import glob
from bs4 import BeautifulSoup

root = os.path.abspath(os.path.dirname(__file__))
files = sorted(glob.glob(os.path.join(root, 'output', 'pages', '*.html')))
solution_files = [f for f in files if os.path.basename(f).startswith('solutions-') or os.path.basename(f) == 'aws-cloud.php.html']

for f in solution_files:
    name = os.path.basename(f)
    with open(f, 'r', encoding='utf-8', errors='ignore') as fh:
        html = fh.read()
    soup = BeautifulSoup(html, 'html.parser')
    # remove nav/footer
    for tag in soup.find_all(['nav', 'footer', 'header', 'script', 'style']):
        tag.decompose()
    # focus on main-section
    main = soup.find('div', class_='main-section')
    if not main:
        main = soup
    print('\n' + '='*80)
    print('FILE:', name)
    # page heading
    top = main.find('section', class_='top-heading-section')
    if top:
        h1 = top.find('h1')
        if h1:
            print('TOP H1:', h1.get_text(strip=True))
    # extract headings and paragraphs within main section rows
    for section in main.find_all(['section', 'div'], class_=lambda x: x and 'section-row' in x):
        print('\nSECTION:', section.get('class'))
        for h in section.find_all(['h1','h2','h3','h4','h5','h6']):
            print('HEADING:', h.get_text(' ', strip=True))
        for p in section.find_all('p'):
            print('PARA:', p.get_text(' ', strip=True))
        for ul in section.find_all('ul'):
            items = [li.get_text(' ', strip=True) for li in ul.find_all('li')]
            if items:
                print('LIST:', items)
        for img in section.find_all('img'):
            src = img.get('src','')
            alt = img.get('alt','')
            if src:
                print('IMAGE:', src, 'ALT:', alt)
        # service card headings/paragraphs
        for item in section.find_all(class_=lambda x: x and 'service-points-wrapper' in x):
            h5 = item.find('h5')
            p = item.find('p')
            if h5:
                print('SERVICE:', h5.get_text(' ', strip=True))
            if p:
                print('SERVICE-P:', p.get_text(' ', strip=True))
    # also list h3/h4 in main directly
    print('\nOTHER HEADINGS AND SECTIONS:')
    for h in main.find_all(['h1','h2','h3','h4','h5','h6']):
        print('  H', h.name, ':', h.get_text(' ', strip=True))
    print('IMAGES:')
    for img in main.find_all('img'):
        src = img.get('src','').strip()
        alt = img.get('alt','').strip()
        if src:
            print(' ', src, alt)
