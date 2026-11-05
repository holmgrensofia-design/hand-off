from pathlib import Path
import re,base64
p=Path(__file__).resolve().parents[1]/'dist'
h=(p/'index.html').read_text();css=(p/'style.css').read_text();eng=re.sub(r'\bexport\s+','',(p/'engine.mjs').read_text());app=re.sub(r'^import[^\n]*\n','',(p/'app.mjs').read_text(),flags=re.M)
h=re.sub(r'<link rel="stylesheet" href="style.css\?v=\d+">',lambda m:'<style>'+css+'</style>',h)
h=re.sub(r'<script type="module" src="app.mjs\?v=\d+"></script>',lambda m:'<script type="module">'+eng+'\n'+app+'</script>',h)
for a in (p/'assets').iterdir():
 key='assets/'+a.name
 if key in h:h=h.replace(key,'data:'+('audio/mpeg' if a.suffix=='.mp3' else 'image/webp')+';base64,'+base64.b64encode(a.read_bytes()).decode())
h=re.sub(r'<a href="walking-reset-(?:autumn|review).html" download>.*?</a>','',h)
assert 'assets/' not in h
(p/'walking-reset-autumn.html').write_text(h)
(p/'walking-reset-review.html').write_text(h.replace("KEY='atelier-autumn-v1'","KEY='atelier-autumn-review-v9'"))
print('Standalone copies updated')
