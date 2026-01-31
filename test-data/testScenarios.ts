export interface TestScenario {
  id: string;
  input: string;
  expected?: string;
}

export const positiveTestScenarios: TestScenario[] = [
  {
    id: 'Pos_Fun_0001',
    input: 'kohomadha machan',
    expected: 'කොහොමද මචන්',
  },
  {
    id: 'Pos_Fun_0002',
    input: 'Anee mata kanna mona hari genalla dhenavadha?',
    expected: 'අනේ මට කන්න මොන හරි ගෙනල්ල දෙනවද? ',
  },
  {
    id: 'Pos_Fun_0003',
    input: 'issarahata yanna',
    expected: 'ඉස්සරහට යන්න',
  },

  {
    id: 'Pos_Fun_0004',
    input: 'mama ennee naehae',
    expected: 'මම එන්නේ නැහැ',
  },

  {
    id: 'Pos_Fun_0005',
    input: 'mama dhaen vaeda karanavaa',
    expected: 'මම දැන් වැඩ කරනවා',
  },

  {
    id: 'Pos_Fun_0006',
    input: 'mama iiyee gedhara giyaa',
    expected: 'මම ඊයේ ගෙදර ගියා',
  },

  {
    id: 'Pos_Fun_0007',
    input: 'mama heta enavaa',
    expected: 'මම හෙට එනවා',
  },

  {
    id: 'Pos_Fun_0008',
    input: 'mama gedhara yanavaa saha passe nidhaagannavaa',
    expected: 'මම ගෙදර යනවා සහ පස්සෙ නිදාගන්නවා',
  },

  {
    id: 'Pos_Fun_0009',
    input: 'vaessa unath api yanna epaeyi',
    expected: 'වැස්ස උනත් අපි යන්න එපැයි',
  },

  {
    id: 'Pos_Fun_00010',
    input: 'oyaa kavadhdha enna hithan inne?',
    expected: 'ඔයා කවද්ද එන්න හිතන් ඉන්නේ?',
  },

  {
    id: 'Pos_Fun_00011',
    input: 'api yamu',
    expected: 'අපි යමු',
  },

  {
    id: 'Pos_Fun_00012',
    input: 'eyaa gedhara giyaa',
    expected: 'එයා ගෙදර ගියා',
  },

  {
    id: 'Pos_Fun_00013',
    input: 'ane ane',
    expected: 'අනෙ අනෙ',
  },

  {
    id: 'Pos_Fun_0014',
    input: 'mama Zoom meeting ekakata yanna inne',
    expected: 'මම Zoom meeting එකකට යන්න ඉන්නේ',
  },
  {
    id: 'Pos_Fun_0015',
    input: 'api Kandy valata yamudha?',
    expected: 'අපි Kandy වලට යමුද?',
  },
  {
    id: 'Pos_Fun_0016',
    input: 'meeka Rs.500',
    expected: 'මේක Rs.500',
  },

{
    id: 'Pos_Fun_0017',
    input: 'meeting eka 7.30 AM',
    expected: 'meeting එක 7.30 AM',
  },

  {
    id: 'Pos_Fun_0018',
    input: 'Machan, eka poddak balanna puluvandha',
    expected: 'මචන්, එක පොඩ්ඩක් බලන්න පුලුවන්ද',
  },

  {
    id: 'Pos_Fun_0019',
    input: 'ASAP ehema karanna',
    expected: 'ASAP එහෙම කරන්න',
  },

  {
    id: 'Pos_Fun_0020',
    input: 'adha podi avulak unaa. kenek call karala adha meeting ekak thiyenava kiyala kiyuvā. Zoom link eka kalin check karala thibbe nae. Office yanna kalin tikak rush ekak thibuna. namuth passe hariyata okkoma manage karagaththaa.',
    expected: 'අද පොඩි අවුලක් උනා. කෙනෙක් call කරල අද meeting එකක් තියෙනව කියල කියුව්ā. Zoom link එක කලින් check කරල තිබ්බෙ නැ. Office යන්න කලින් ටිකක් rush එකක් තිබුන. නමුත් පස්සෙ හරියට ඔක්කොම manage කරගත්තා.',
  },

   {
    id: 'Pos_Fun_0021',
    input: 'gihin enna iitapassee mata kiyanna',
    expected: 'ගිහින් එන්න ඊටපස්සේ මට කියන්න',
  },

   {
    id: 'Pos_Fun_0022',
    input: 'mama vaeda karanna yanavaa',
    expected: 'මම වැඩ කරන්න යනවා',
  },

  {
    id: 'Pos_Fun_0023',
    input: 'mata nidhimathayi',
    expected: 'මට නිදිමතයි',
  },

  {
    id: 'Pos_Fun_0024',
    input: 'mama gedhara yanavaa.',
    expected: 'මම ගෙදර යනවා.',
  },

  {
    id: 'Pos_UI_0001',
    input: 'oyaata kohomadha?',
    expected: 'ඔයාට කොහොමද?',
  },

   

  
];

export const negativeTestScenarios: TestScenario[] = [
  
  {
    id: 'Neg_Fun_0001',
    input: 'please mata help karanna',
    expected: 'කරුණාකර මට උදව් කරන්න ! ',
  },

  {
    id: 'Neg_Fun_0002',
    input: 'mama yanne giyaaaa',
    expected: 'මම යන්න ගියා ',
  },


  {
    id: 'Neg_Fun_0003',
    input: 'matabathooonee',
    expected: 'මට බත් ඕනෙ',
  },

  {
    id: 'Neg_Fun_0004',
    input: 'mama enna epa kiyala kiwwe na',
    expected: 'මම එන්න එපා කියල කිව්වෙ නැ  ',
  },

  {
    id: 'Neg_Fun_0005',
    input: 'mama meeting eka cancel kara',
    expected: 'මම රැස්වීම අවලංගු කරා',
  },

   {
    id: 'Neg_Fun_0006',
    input: 'ekanampatta',
    expected: 'එක නම් පට්ට',
  },

  {
    id: 'Neg_Fun_0007',
    input: '[ @@@###$$$ ]',
    expected: '',
  },

  {
    id: 'Neg_Fun_0008',
    input: 'mata email eka dhaanna',
    expected: ' මට විද්‍යුත් තැපෑල දාන්න ',
  },

   {
    id: 'Neg_Fun_0009',
    input: 'KaruNaakaralaamata Podi Udhavvak KarannapuLuvandha',
    expected: 'කරුණාකරලා මට පොඩි උදව්වක් කරන්න පුලුවන්ද ',
  },

  {
    id: 'Neg_Fun_0010',
    input: 'Mama adha yanna hitiye campus ekata. Eth mata yanna beri una. Adha evaluation eka thibbadha? Assignment eka submit karadha?',
    expected: 'මම අද කැම්පස් එකට යන්න හිටියේ. එත් මට යන්න බැරි උනා. අද ඇගයීම තිබ්බද? පැවරුම භාර දුන්නද?',
  },


  

  {
  id: 'Neg_UI_0001',
  input: 'RAPID_CLEAR_5_TIMES',
  expected: 'Clicking Clear repeatedly should not crash or freeze; input remains empty and output area stays visible.',
},
];

export const allTestScenarios: TestScenario[] = [
  ...positiveTestScenarios,
  ...negativeTestScenarios,
];
