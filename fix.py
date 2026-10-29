path = 'src/LanguageContext.jsx'
lines = open(path, encoding='utf-8').read().splitlines(keepends=True)
nl = chr(92) + 'n'
sep = nl + nl
p1 = 'Worldwide technical monitoring and support of sensor systems for customer frequency measurement in retail stores and shopping centers.'
p2 = 'Performing calibrations, validations and plausibility checks of sensor data as well as analysis of structural conditions and topologies on site.'
p3 = 'Systematic error analysis of internal systems (file servers, databases, web servers) as well as technical coordination with customer IT (firewalls, port releases) and building services.'
p4 = 'Continuous creation and maintenance of technical documentation.'
body = sep.join([p1, p2, p3, p4])
new_line = "      currentSub: '" + body + "',\n"
lines[69] = new_line
open(path, 'w', encoding='utf-8').write(''.join(lines))
print('done')
