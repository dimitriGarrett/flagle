"use strict";

class Set
{  
    constructor()
    {
        this.allPossibleGuesses = [];
        this.allPossibleGuessesCapital = [];
        this.allContinents = [];
        this.allContinentsCapital = [];
        this.allContinentsDailyCapital = [];

        this.allPossibleGuessesDaily = [];
        this.allPossibleGuessesCapitalDaily = [];
        this.allContinentsDaily = [];

        this.allLeftText = [];
        this.allLeftText2 = [];
        this.allRightText = [];
        this.allRightText2 = [];
    }
}

class UnitedStates extends Set
{
    constructor()
    {
        super();

        this.allPossibleGuesses = ['alabama', 'alaska', 'arizona', 'arkansas', 'california', 'colorado', 'connecticut', 'delaware', 'florida', 'georgia', 'guam', 'hawaii', 'idaho', 'illinois', 'indiana', 'iowa', 'kansas', 'kentucky', 'louisiana', 'maine', 'maryland', 'massachusetts', 'michigan', 'minnesota', 'mississippi', 'missouri', 'montana', 'nebraska', 'nevada', 'new hampshire', 'new jersey', 'new mexico', 'new york', 'north carolina', 'north dakota', 'ohio', 'oklahoma', 'oregon', 'pennsylvania', 'puerto rico', 'rhode island', 'south carolina', 'south dakota', 'tennessee', 'texas', 'utah', 'vermont', 'virginia', 'washington', 'west virginia', 'wisconsin', 'wyoming'];  
        this.allPossibleGuessesCapital = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
        this.allContinents = ['US'];

        this.allLeftText = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho'];
        this.allLeftText2 = ['Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri'];
        this.allRightText = ['Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania'];
        this.allRightText2 = ['Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
    }
}

class Countries extends Set
{
    constructor()
    {        
        super();

        this.allPossibleGuesses =  ['afghanistan', 'albania', 'algeria', 'andorra', 'angola', 'antigua and barbuda', 'argentina', 'armenia', 'australia', 'austria', 'azerbaijan', 'bahamas', 'bahrain', 'bangladesh', 'barbados', 'belarus', 'belgium', 'belize', 'benin', 'bhutan', 'bolivia', 'botswana', 'bosnia and herzegovina', 'brazil', 'brunei', 'bulgaria', 'burkina faso', 'burundi', 'cabo verde', 'cambodia', 'cameroon', 'canada', 'central african republic', 'chad', 'chile', 'china', 'columbia', 'comoros', 'congo', 'costa rica', 'croatia', 'cuba', 'cyprus', 'czechia', 'democratic republic of congo', 'denmark', 'djibouti', 'dominica', 'dominican republic', 'ecuador', 'egypt', 'el salvador', 'england', 'equatorial guinea', 'eritrea', 'estonia', 'eswatini', 'ethiopia', 'fiji', 'finland', 'france', 'gabon', 'gambia', 'georgia', 'germany', 'ghana', 'greece', 'grenada', 'guatemala', 'guinea', 'guinea bissau', 'guyana', 'haiti', 'honduras', 'hungary', 'iceland', 'india', 'iran', 'iraq', 'ireland', 'israel', 'italy', 'ivory coast', 'jamaica', 'japan', 'jordan', 'kazakhstan', 'kenya', 'kiribati', 'kosovo', 'kuwait', 'kyrgyzstan', 'laos', 'latvia', 'lebanon', 'lesotho', 'liberia', 'libya', 'liechtenstein', 'lithuania', 'luxembourg', 'madagascar', 'malawi', 'malaysia', 'maldives', 'mali', 'malta', 'marshall islands', 'mauritania', 'mauritius', 'mexico', 'micronesia', 'moldova', 'monaco', 'mongolia', 'montenegro', 'morocco', 'mozambique', 'myanmar', 'namibia', 'nauru', 'nepal', 'netherlands', 'new zealand', 'nicaragua', 'niger', 'nigeria', 'northern ireland', 'north korea', 'north macedonia', 'norway', 'oman', 'pakistan', 'palau', 'palestine', 'panama', 'papua new guinea', 'paraguay', 'peru', 'philippines', 'poland', 'portugal', 'qatar', 'romania', 'russia', 'rwanda', 'saint kitts and nevis', 'saint lucia', 'saint vincent and the grenadines', 'samoa', 'san marino', 'sao tome and principe', 'saudi arabia', 'scotland', 'senegal', 'serbia', 'seychelles', 'sierra leone', 'singapore', 'slovakia', 'slovenia', 'solomon islands', 'somalia', 'south africa', 'south korea', 'south sudan', 'spain', 'sri lanka', 'sudan', 'suriname', 'sweden', 'switzerland', 'syria', 'taiwan', 'tajikistan', 'tanzania', 'thailand', 'timor-leste', 'togo', 'tonga', 'trinidad and tobago', 'tunisia', 'turkey', 'turkmenistan', 'tuvalu', 'uganda', 'ukraine', 'united arab emirates', 'united kingdom', 'united states', 'uruguay', 'uzbekistan', 'vanuatu', 'vatican city', 'venezuela', 'vietnam', 'wales', 'yemen', 'zambia', 'zimbabwe'];

        this.allPossibleGuessesCapital =  ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Botswana', 'Bosnia and Herzegovina', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia', 'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Columbia', 'Comoros', 'Congo', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czechia', 'Democratic Republic of Congo', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'England', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Ivory Coast', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Northern Ireland', 'North Korea', 'North Macedonia', 'Norway', 'Oman', 'Pakistan', 'Palau',  'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Scotland', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Wales', 'Yemen', 'Zambia', 'Zimbabwe'];

        this.allContinents = ['asia', 'europe', 'africa', 'europe', 'africa', 'north america', 'south america', 'asia', 'oceania', 'europe', 'asia', 'north america', 'asia', 'asia', 'north america', 'europe', 'europe', 'north america', 'africa', 'asia', 'south america', 'africa', 'europe', 'south america', 'asia', 'europe', 'africa', 'africa', 'africa', 'asia', 'africa', 'north america', 'africa', 'africa', 'south america', 'asia', 'south america', 'africa', 'africa', 'north america', 'europe', 'north america', 'europe', 'europe', 'africa', 'europe', 'africa', 'north america', 'north america', 'south america', 'africa', 'north america', 'europe', 'africa', 'africa', 'europe', 'africa', 'africa', 'oceania', 'europe', 'europe', 'africa', 'africa', 'asia', 'europe', 'africa', 'europe', 'north america', 'north america', 'africa', 'africa', 'south america', 'north america', 'north america', 'europe', 'europe', 'asia', 'asia', 'asia', 'europe', 'asia', 'europe', 'africa', 'north america', 'asia', 'asia', 'asia', 'africa', 'oceania', 'europe', 'asia', 'asia', 'asia', 'europe', 'asia', 'africa', 'africa', 'africa', 'europe', 'europe', 'europe', 'africa', 'africa', 'asia', 'asia', 'africa', 'europe', 'oceania', 'africa', 'africa', 'north america', 'oceania', 'europe', 'europe', 'asia', 'europe', 'africa', 'africa', 'asia', 'africa', 'oceania', 'asia', 'europe', 'oceania', 'north america', 'africa', 'africa', 'europe', 'asia', 'europe', 'europe', 'asia', 'asia', 'oceania', 'asia', 'north america', 'oceania', 'south america', 'south america', 'asia', 'europe', 'europe', 'asia', 'europe', 'asia', 'africa', 'north america', 'north america', 'north america', 'oceania', 'europe', 'africa', 'asia', 'europe', 'africa', 'europe', 'africa', 'africa', 'asia', 'europe', 'europe', 'oceania', 'africa', 'africa', 'asia', 'africa', 'europe', 'asia', 'africa', 'south america', 'europe', 'europe', 'asia',  'asia', 'asia', 'africa', 'asia', 'asia', 'africa', 'oceania', 'north america',  'africa', 'europe', 'asia', 'oceania', 'africa', 'europe', 'asia', 'europe', 'north america', 'south america', 'asia', 'oceania', 'europe', 'south america', 'asia', 'europe', 'asia', 'africa', 'africa'];

        this.allContinentsCapital = ['Eurasia', 'Eurasia', 'Africa', 'Eurasia', 'Africa', 'North America', 'South America', 'Eurasia', 'Oceania', 'Eurasia', 'Eurasia', 'North America', 'Eurasia', 'Eurasia', 'North America', 'Eurasia', 'Eurasia', 'North America', 'Africa', 'Eurasia', 'South America', 'Africa', 'Eurasia', 'South America', 'Eurasia', 'Eurasia', 'Africa', 'Africa', 'Africa', 'Eurasia', 'Africa', 'North America', 'Africa', 'Africa', 'South America', 'Eurasia', 'South America', 'Africa', 'Africa', 'North America', 'Eurasia', 'North America', 'Eurasia', 'Eurasia', 'Africa', 'Eurasia', 'Africa', 'North America', 'North America', 'South America', 'Africa', 'North America', 'Eurasia', 'Africa', 'Africa', 'Eurasia', 'Africa', 'Africa', 'Oceania', 'Eurasia', 'Eurasia', 'Africa', 'Africa', 'Eurasia', 'Eurasia', 'Africa', 'Eurasia', 'North America', 'North America', 'Africa', 'Africa', 'South America', 'North America', 'North America', 'Eurasia', 'Eurasia', 'Eurasia', 'Eurasia', 'Eurasia', 'Eurasia', 'Eurasia', 'Eurasia', 'Africa', 'North America', 'Eurasia', 'Eurasia', 'Eurasia', 'Africa', 'Oceania', 'Eurasia', 'Eurasia', 'Eurasia', 'Eurasia', 'Eurasia', 'Eurasia', 'Africa', 'Africa', 'Africa', 'Eurasia', 'Eurasia', 'Eurasia', 'Africa', 'Africa', 'Eurasia', 'Eurasia', 'Africa', 'Eurasia', 'Oceania', 'Africa', 'Africa', 'North America', 'Oceania', 'Eurasia', 'Eurasia', 'Eurasia', 'Eurasia', 'Africa', 'Africa', 'Eurasia', 'Africa', 'Oceania', 'Eurasia', 'Eurasia', 'Oceania', 'North America', 'Africa', 'Africa', 'Eurasia', 'Eurasia', 'Eurasia', 'Eurasia', 'Eurasia', 'Eurasia', 'Oceania', 'Eurasia', 'North America', 'Oceania', 'South America', 'South America', 'Eurasia', 'Eurasia', 'Eurasia', 'Eurasia', 'Eurasia', 'Eurasia', 'Africa', 'North America', 'North America', 'North America', 'Oceania', 'Eurasia', 'Africa', 'Eurasia', 'Eurasia', 'Africa', 'Eurasia', 'Africa', 'Africa', 'Eurasia', 'Eurasia', 'Eurasia', 'Oceania', 'Africa', 'Africa', 'Eurasia', 'Africa', 'Eurasia', 'Eurasia', 'Africa', 'South America', 'Eurasia', 'Eurasia', 'Eurasia',  'Eurasia', 'Eurasia', 'Africa', 'Eurasia', 'Eurasia', 'Africa', 'Oceania', 'North America',  'Africa', 'Eurasia', 'Eurasia', 'Oceania', 'Africa', 'Eurasia', 'Eurasia', 'Eurasia', 'North America', 'South America', 'Eurasia', 'Oceania', 'Eurasia', 'South America', 'Eurasia', 'Eurasia', 'Eurasia', 'Africa', 'Africa'];

        this.allPossibleGuessesCapital =  ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Botswana', 'Bosnia and Herzegovina', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia', 'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Columbia', 'Comoros', 'Congo', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czechia', 'Democratic Republic of Congo', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'England', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Ivory Coast', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Northern Ireland', 'North Korea', 'North Macedonia', 'Norway', 'Oman', 'Pakistan', 'Palau',  'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Scotland', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Wales', 'Yemen', 'Zambia', 'Zimbabwe'];

        this.allPossibleGuessesDaily = ['croatia', 'spain', 'burkina faso', 'vatican city', 'saudi arabia',  'argentina', 'georgia', 'zambia', 'south sudan', 'montenegro',  'china', 'kazakhstan',  'el salvador', 'albania', 'iran', 'democratic republic of congo', 'niger', 'timor-leste',  'sao tome and principe', 'canada',  'switzerland',  'netherlands', 'saint lucia', 'brunei', 'madagascar',  'palau', 'uganda', 'dominica', 'kuwait', 'india', 'myanmar', 'angola', 'jamaica', 'singapore', 'tanzania', 'algeria', 'sudan', 'vanuatu', 'fiji', 'saint vincent and the grenadines', 'haiti', 'laos', 'turkey', 'italy', 'gambia', 'kyrgyzstan', 'antigua and barbuda', 'papua new guinea', 'luxembourg', 'qatar', 'sri lanka', 'united kingdom', 'bahamas', 'morocco', 'andorra', 'philippines', 'djibouti', 'bolivia', 'kosovo', 'mongolia', 'austria', 'seychelles', 'greece', 'lebanon', 'peru', 'bahrain', 'afghanistan', 'oman', 'england', 'cyprus', 'taiwan', 'solomon islands', 'grenada', 'belarus', 'northern ireland', 'malaysia', 'guinea', 'azerbaijan', 'jordan', 'san marino', 'zimbabwe', 'cabo verde', 'senegal', 'uruguay', 'egypt',  'burundi', 'cambodia', 'samoa', 'mauritius', 'rwanda', 'chad', 'bhutan', 'somalia', 'ireland', 'bosnia and herzegovina', 'nauru', 'vietnam', 'czechia', 'estonia', 'south korea', 'nicaragua', 'latvia', 'scotland', 'barbados', 'paraguay', 'togo', 'liechtenstein', 'syria', 'brazil', 'eritrea', 'norway', 'central african republic', 'australia', 'sweden', 'moldova', 'costa rica', 'uzbekistan', 'botswana', 'nepal', 'serbia', 'belgium', 'monaco', 'russia', 'south africa', 'guatemala', 'turkmenistan', 'iraq', 'benin', 'north korea', 'yemen', 'eswatini', 'lithuania', 'bulgaria', 'ecuador', 'columbia', 'new zealand', 'slovenia', 'mauritania', 'hungary', 'armenia', 'poland', 'belize', 'mexico', 'saint kitts and nevis', 'romania', 'israel', 'maldives',  'united states', 'cuba', 'trinidad and tobago', 'mali', 'liberia', 'thailand', 'finland', 'cameroon', 'kiribati', 'guinea bissau', 'marshall islands', 'panama', 'ivory coast', 'germany', 'honduras', 'sierra leone', 'united arab emirates', 'mozambique', 'kenya', 'nigeria', 'tuvalu', 'portugal', 'malawi', 'dominican republic', 'tonga', 'suriname', 'ukraine', 'comoros', 'guyana', 'ethiopia', 'pakistan', 'wales', 'ghana','venezuela', 'chile', 'iceland',  'equatorial guinea', 'tajikistan', 'north macedonia', 'congo', 'lesotho',  'france', 'denmark', 'micronesia', 'palestine', 'tunisia', 'bangladesh', 'japan', 'libya', 'malta', 'slovakia', 'namibia', 'gabon'];

        this.allPossibleGuessesDailyCapital = ['Croatia', 'Spain', 'Burkina Faso', 'Vatican City', 'Saudi Arabia',  'Argentina', 'Georgia', 'Zambia', 'South Sudan', 'Montenegro',  'China', 'Kazakhstan',  'El Salvador', 'Albania', 'Iran', 'Democratic Republic of Congo', 'Niger', 'Timor-Leste',  'Sao Tome and Principe', 'Canada',  'Switzerland',  'Netherlands', 'Saint Lucia', 'Brunei', 'Madagascar',  'Palau', 'Uganda', 'Dominica', 'Kuwait', 'India', 'Myanmar', 'Angola', 'Jamaica', 'Singapore', 'Tanzania', 'Algeria', 'Sudan', 'Vanuatu', 'Fiji', 'Saint Vincent and the Grenadines', 'Haiti', 'Laos', 'Turkey', 'Italy', 'Gambia', 'Kyrgyzstan', 'Antigua and Barbuda', 'Papua New Guinea', 'Luxembourg', 'Qatar', 'Sri Lanka', 'United Kingdom', 'Bahamas', 'Morocco', 'Andorra', 'Philippines', 'Djibouti', 'Bolivia', 'Kosovo', 'Mongolia', 'Austria', 'Seychelles', 'Greece', 'Lebanon', 'Peru', 'Bahrain', 'Afghanistan', 'Oman', 'England', 'Cyprus', 'Taiwan', 'Solomon Islands', 'Grenada', 'Belarus', 'Northern Ireland', 'Malaysia', 'Guinea', 'Azerbaijan', 'Jordan', 'San Marino', 'Zimbabwe', 'Cabo Verde', 'Senegal', 'Uruguay', 'Egypt',  'Burundi', 'Cambodia', 'Samoa', 'Mauritius', 'Rwanda', 'Chad', 'Bhutan', 'Somalia', 'Ireland', 'Bosnia and Herzegovina', 'Nauru', 'Vietnam', 'Czechia', 'Estonia', 'South Korea', 'Nicaragua', 'Latvia', 'Scotland', 'Barbados', 'Paraguay', 'Togo', 'liechtenstein', 'Syria', 'Brazil', 'Eritrea', 'Norway', 'Central African Republic', 'Australia', 'Sweden', 'Moldova', 'Costa Rica', 'Uzbekistan', 'Botswana', 'Nepal', 'Serbia', 'Belgium', 'Monaco', 'Russia', 'South Africa', 'Guatemala', 'Turkmenistan', 'Iraq', 'Benin', 'North Korea', 'Yemen', 'Eswatini', 'Lithuania', 'Bulgaria', 'Ecuador', 'Columbia', 'New Zealand', 'Slovenia', 'Mauritania', 'Hungary', 'Armenia', 'Poland', 'Belize', 'Mexico', 'Saint Kitts and Nevis', 'Romania', 'Israel', 'Maldives',  'United States', 'Cuba', 'Trinidad and Tobago', 'Mali', 'Liberia', 'Thailand', 'Finland', 'Cameroon', 'Kiribati', 'Guinea Bissau', 'Marshall Islands', 'Panama', 'Ivory Coast', 'Germany', 'Honduras', 'Sierra Leone', 'United Arab Emirates', 'Mozambique', 'Kenya', 'Nigeria', 'Tuvalu', 'Portugal', 'Malawi', 'Dominican Republic', 'Tonga', 'Suriname', 'Ukraine', 'Comoros', 'Guyana', 'Ethiopia', 'Pakistan', 'Wales', 'Ghana','Venezuela', 'Chile', 'Iceland',  'Equatorial Guinea', 'Tajikistan', 'North Macedonia', 'Congo', 'Lesotho',  'France', 'Denmark', 'Micronesia', 'Palestine', 'Tunisia', 'Bangladesh', 'Japan', 'Libya', 'Malta', 'Slovakia', 'Namibia', 'Gabon'];

        this. allContinentsDaily = ['europe', 'europe', 'africa', 'europe', 'asia', 'south america',  'asia', 'africa', 'africa', 'europe', 'asia', 'asia', 'north america', 'europe', 'asia', 'africa', 'africa', 'asia',  'africa', 'north america',  'europe', 'europe', 'north america', 'asia', 'africa',  'oceania', 'africa', 'north america', 'asia',  'asia', 'asia', 'africa', 'north america', 'asia', 'africa', 'africa', 'africa', 'oceania', 'oceania', 'north america', 'north america', 'asia', 'europe', 'europe', 'africa', 'asia', 'north america', 'oceania', 'europe', 'asia', 'asia', 'europe', 'north america', 'africa', 'europe', 'asia', 'africa', 'south america', 'europe',  'asia', 'europe', 'africa', 'europe', 'asia', 'south america', 'asia', 'asia', 'asia', 'europe', 'europe', 'asia', 'oceania',  'north america', 'europe', 'europe', 'asia', 'africa', 'asia', 'asia', 'asia', 'africa', 'africa', 'africa', 'south america', 'africa', 'africa', 'asia', 'oceania', 'africa', 'africa', 'africa', 'asia', 'africa', 'europe', 'europe', /* BOSNIA*/ 'oceania', 'asia', 'europe', 'europe', 'asia', 'north america', 'europe', 'europe', 'north america', 'south america', 'africa', 'europe', 'asia', 'south america',/*BRAZIL*/ 'africa', 'europe', 'africa', 'oceania', 'europe', 'europe', 'north america', 'asia', 'africa', 'asia', 'europe', 'europe', 'europe', 'europe', 'africa', 'north america', 'asia', 'asia', 'africa',/*BENIN*/ 'asia', 'asia', 'africa', 'europe', 'europe', 'south america',  'south america', 'oceania', 'europe', 'africa', 'europe', 'asia', 'europe', 'south america', 'north america', 'north america',/*SAINT KITTS*/ 'europe', 'asia', 'asia', 'north america', 'north america', 'north america', 'africa', 'africa', 'asia', 'europe', 'africa', 'oceania', 'africa', 'oceania', 'north america', 'africa', 'europe', 'north america',/*HONDURAS*/ 'africa', 'asia', 'africa', 'africa', 'africa', /*NIGERIA*/ 'oceania', 'europe', 'africa', 'north america', 'oceania', 'south america', 'europe', 'africa', 'south america', 'africa', 'asia', 'europe', 'africa', 'south america', 'south america', 'europe', 'africa', 'asia', 'europe', 'africa', 'africa', 'europe', 'europe', 'oceania', 'africa', 'africa', 'asia', 'asia', 'africa', 'europe', 'europe', 'africa', 'africa'];

        this.allContinentsDailyCapital = ['Eurasia', 'Eurasia', 'Africa', 'Eurasia', 'Eurasia', 'South America',  'Eurasia', 'Africa', 'Africa', 'Eurasia', 'Eurasia', 'Eurasia', 'North America', 'Eurasia', 'Eurasia', 'Africa', 'Africa', 'Eurasia',  'Africa', 'North America',  'Eurasia', 'Eurasia', 'North America', 'Eurasia', 'Africa',  'Oceania', 'Africa', 'North America', 'Eurasia',  'Eurasia', 'Eurasia', 'Africa', 'North America', 'Eurasia', 'Africa', 'Africa', 'Africa', 'Oceania', 'Oceania', 'North America', 'North America', 'Eurasia', 'Eurasia', 'Eurasia', 'Africa', 'Eurasia', 'North America', 'Oceania', 'Eurasia', 'Eurasia', 'Eurasia', 'Eurasia', 'North America', 'Africa', 'Eurasia', 'Eurasia', 'Africa', 'South America', 'Eurasia',  'Eurasia', 'Eurasia', 'Africa', 'Eurasia', 'Eurasia', 'South America', 'Eurasia', 'Eurasia', 'Eurasia', 'Eurasia', 'Eurasia', 'Eurasia', 'Oceania',  'North America', 'Eurasia', 'Eurasia', 'Eurasia', 'Africa', 'Eurasia', 'Eurasia', 'Eurasia', 'Africa', 'Africa', 'Africa', 'South America', 'Africa', 'Africa', 'Eurasia', 'Oceania', 'Africa', 'Africa', 'Africa', 'Eurasia', 'Africa', 'Eurasia', 'Eurasia', /* BOSNIA*/ 'Oceania', 'Eurasia', 'Eurasia', 'Eurasia', 'Eurasia', 'North America', 'Eurasia', 'Eurasia', 'North America', 'South America', 'Africa', 'Eurasia', 'Eurasia', 'South America',/*BRAZIL*/ 'Africa', 'Eurasia', 'Africa', 'Oceania', 'Eurasia', 'Eurasia', 'North America', 'Eurasia', 'Africa', 'Eurasia', 'Eurasia', 'Eurasia', 'Eurasia', 'Eurasia', 'Africa', 'North America', 'Eurasia', 'Eurasia', 'Africa',/*BENIN*/ 'Eurasia', 'Eurasia', 'Africa', 'Eurasia', 'Eurasia', 'South America',  'South America', 'Oceania', 'Eurasia', 'Africa', 'Eurasia', 'Eurasia', 'Eurasia', 'South America', 'North America', 'North America',/*SAINT KITTS*/ 'Eurasia', 'Eurasia', 'Eurasia', 'North America', 'North America', 'North America', 'Africa', 'Africa', 'Eurasia', 'Eurasia', 'Africa', 'Oceania', 'Africa', 'Oceania', 'North America', 'Africa', 'Eurasia', 'North America',/*HONDURAS*/ 'Africa', 'Eurasia', 'Africa', 'Africa', 'Africa', /*NIGERIA*/ 'Oceania', 'Eurasia', 'Africa', 'North America', 'Oceania', 'South America', 'Eurasia', 'Africa', 'South America', 'Africa', 'Eurasia', 'Eurasia', 'Africa', 'South America', 'South America', 'Eurasia', 'Africa', 'Eurasia', 'Eurasia', 'Africa', 'Africa', 'Eurasia', 'Eurasia', 'Oceania', 'Africa', 'Africa', 'Eurasia', 'Eurasia', 'Africa', 'Eurasia', 'Eurasia', 'Africa', 'Africa'];

        this.allLeftText = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Botswana', 'Bosnia and Herzegovina', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia', 'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Columbia', 'Comoros', 'Congo', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czechia', 'Democratic Republic Of Congo', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador'];

        this.allLeftText2 = ['Egypt', 'El Salvador', 'England', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Ivory Coast', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania'];

        this.allRightText = ['Luxembourg', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Northern Ireland', 'North Korea', 'North Macedonia', 'Norway', 'Oman', 'Pakistan', 'Palau',  'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa'];

        this.allRightText2 = ['San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Scotland', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Wales', 'Yemen', 'Zambia', 'Zimbabwe'];
    }
}

var currentSet;
var currentSetIsUS = false;

var mouseX = -1;
var mouseY = -1;

var numGuess = 0;
var numGuessEndless = 0;
var numGuessEndlessCount = 0;
var triesMoreThanOne = false;
var canSkip = true;

var todayOffset = 0;

var allCountriesGuessed = [];
var allIndexes = [];

var firstPath = 'flags197/';

var body;

var hasGuessed = false;
var fullWordGuess = false;
var canGetOut = true;

var allDayOffset = [];
var blockInput = false;

var fullGuess = '';
var mode = 'daily';
var color = 'light';

var image;
var currentInput;
var countryMenu;
var settingsMenu;
var skip;
var flagle;
var area;
var cont;
var change = [0];

var leftDiv;
var leftDiv2;
var rightDiv;
var rightDiv2;

var countrySet;
var usSet;

var usedHintDaily = false;

var autoCompleteMode = 0;

var allLeftDivElement = [];
var allLeftDivElement2 = [];
var allRightDivElement = [];
var allRightDivElement2 = [];

var isSmallScreen = false;
var wantsSmallScreen = false;

var isColorBlind = false;

function rules()
{
    var menu = document.getElementById('rules');

    document.getElementById('lastFlag').style.visibility = 'hidden';

    //alert(menu.style.visibility);

    if (isSmallScreen || wantsSmallScreen)
    {
        var all = countryMenu;

        if (all.style.visibility == 'visible')
        {
            all.style.visibility = 'hidden';  
        }
    }

    /*if (menu.style.visibility == 'visible')
            {
                image.style.visibility = 'visible';

                menu.style.visibility = 'hidden';  
            }

            else
            {
                image.style.visibility = 'hidden';

                menu.style.visibility = 'visible';
            }*/

    try
    {
        if (menu.style.visibility == 'visible')
        {
            document.getElementById('overlay').style.visibility = 'hidden';

            image.style.visibility = 'visible';
            menu.style.visibility = 'hidden';
            area.style.visibility = 'visible';

            cont.style.visibility = 'visible';
            document.getElementById('lastFlag').style.visibility = 'visible';
            
            currentInput.focus();
        }

        else
        {
            document.getElementById('overlay').style.visibility = 'visible';
            cont.style.visibility = 'hidden';

            image.style.visibility = 'hidden';
            menu.style.visibility = 'visible';
            area.style.visibility = 'hidden';

            settingsMenu.style.visibility = 'hidden';
        }
    }

    catch (e)
    {
        alert("SETTINGS: " + e);  
    }
}

function normalVision()
{
    isColorBlind = false;

    change[6].style.backgroundColor = 'rgb(0, 255, 0)';
    change[7].style.backgroundColor = 'rgb(94, 106, 108)';

    window.localStorage.setItem('blind', isColorBlind);
}

function colorVision()
{
    isColorBlind = true;

    change[6].style.backgroundColor = 'rgb(94, 106, 108)';
    change[7].style.backgroundColor = 'rgb(0, 255, 0)';

    window.localStorage.setItem('blind', isColorBlind);
}

function viewCountries()
{
    if (isSmallScreen || wantsSmallScreen || currentSetIsUS)
    {
        var allMenu = countryMenu;

        var menu = settingsMenu;
        if (menu.style.visibility == 'visible')
        {
            menu.style.visibility = 'hidden';  
        }

        if (allMenu.style.visibility == 'visible')
        {
            cont.style.visibility = 'visible';
            document.getElementById('overlay').style.visibility = 'hidden';
            allMenu.style.visibility = 'hidden';  
            area.style.visibility = 'visible';

            image.style.visibility = 'visible';

            document.getElementById('rules').style.visibility = 'hidden';
            
            currentInput.focus();
        }

        else
        {
            cont.style.visibility = 'hidden';
            document.getElementById('overlay').style.visibility = 'visible';
            allMenu.style.visibility = 'visible';  

            image.style.visibility = 'hidden';
            area.style.visibility = 'hidden';

            document.getElementById('rules').style.visibility = 'hidden';
        }      
    }
}

function screen1()
{
    if (currentSetIsUS)
    {
        return;  
    }

    wantsSmallScreen = false;

    screen();
}

function screen2()
{
    wantsSmallScreen = true;

    screen();
}

function screen()
{
    if (isSmallScreen)
    {
        updateSideText();

        change[9].style.backgroundColor = 'rgb(0, 255, 0)';
        change[8].style.backgroundColor = 'rgb(94, 106, 108)';

        return;  
    }

    if (wantsSmallScreen == true)
    {
        updateSideText();

        change[9].style.backgroundColor = 'rgb(0, 255, 0)';
        change[8].style.backgroundColor = 'rgb(94, 106, 108)';
    }

    else
    {
        updateSideText();

        document.getElementById("viewCountries").style.visibility = 'hidden';

        change[9].style.backgroundColor = 'rgb(94, 106, 108)';
        change[8].style.backgroundColor = 'rgb(0, 255, 0)';
    }

    updateSides();

    settingsMenu.style.visibility = 'hidden'; 
    image.style.visibility = 'visible';
    area.style.visibility = 'visible';

    document.getElementById('lastFlag').style.visibility = 'visible';


    currentInput.focus();
}

var count = 0;
var isHard = false;

function changeDiff()
{ 
    if (!currentSetIsUS)
    {
        try
        {
            var string = 'grayscale(100%) invert(1) brightness(37.5%)';

            if (count == 0)
            {
                image.style.filter = string;

                //GET HARD AND CHANGEs

                var hardMode = window.localStorage.getItem('hard');

                if (hardMode != 'hard')
                {
                    image.style.filter = 'none';  

                    document.getElementById('hard').innerHTML = '💀';

                    document.documentElement.style.setProperty('--HardHover', 'rgb(105, 24, 24)');
                }

                else
                {
                    image.style.filter = string;  

                    document.getElementById('hard').innerHTML = '🙂';

                    document.documentElement.style.setProperty('--HardHover', 'rgb(0, 128, 128)');
                }

                count = count + 1;
            }
            else
            {
                if (image.style.filter == string && canGetOut == true)
                {
                    image.style.filter = 'none';
                    document.getElementById('hard').innerHTML = '💀';
                    window.localStorage.setItem('hard', 'none');

                    document.documentElement.style.setProperty('--HardHover', 'rgb(105, 24, 24)');
                }

                else
                {
                    image.style.filter = string;
                    document.getElementById('hard').innerHTML = '🙂';
                    window.localStorage.setItem('hard', 'hard');

                    document.documentElement.style.setProperty('--HardHover', 'rgb(0, 128, 128)');

                    canGetOut = false;
                    
                    document.getElementById("hard").disabled = true;
                }
            }
        }

        catch (e)
        {
            alert(e);  
        }  
    }

    else
    {
        try
        {
            if (isHard == false)
            {
                isHard = true;

                document.getElementById('hard').innerHTML = '🙂';
                window.localStorage.setItem('hard', 'hard');

                firstPath = "flagsUSH/";

                canGetOut = false;
                
                document.getElementById("hard").disabled = true;

                document.documentElement.style.setProperty('--HardHover', 'rgb(0, 128, 128)');
            }

            else if (isHard == true && canGetOut == true)
            {
                document.getElementById('hard').innerHTML = '💀';
                window.localStorage.setItem('hard', 'none');

                isHard = false;

                document.documentElement.style.setProperty('--HardHover', 'rgb(105, 24, 24)');
            }

            var lowerImage = currentSet.allPossibleGuesses[todayOffset].toLowerCase();

            lowerImage = lowerImage.split(' ').join('');

            //image.src ="flags197/" + lowerImage + ".png";

            var path = firstPath + lowerImage + ".png";

            image.src = path;
        }

        catch (e)
        {
            alert(e);
        }
    }
}

function skipFlag()
{
    if (mode == 'endless' && canSkip)
    {
        //generate random number, and start over
        area.innerHTML = '';

        cont.innerHTML = '';

        numGuess = 0;

        createNewInputAndLabel();

        currentInput = document.getElementById('guess' + numGuess);

        var lastFlag = document.getElementById('lastFlag');

        var text = currentSet.allPossibleGuessesCapital[todayOffset];

        lastFlag.innerHTML = 'The Last Flag Was: ' + text;
        lastFlag.style.visibility ='visible';

        todayOffset = parseInt(Math.random() * currentSet.allPossibleGuesses.length);

        while (allDayOffset.includes(todayOffset))
        {
            todayOffset = parseInt(Math.random() * currentSet.allPossibleGuesses.length);
        }

        //document.documentElement.style.setProperty('--BGColor', 'rgb(255, 255, 255)');

        var lowerImage = currentSet.allPossibleGuesses[todayOffset].toLowerCase();

        lowerImage = lowerImage.split(' ').join('');

        //image.src ="flags197/" + lowerImage + ".png";

        var path = firstPath + lowerImage + ".png";

        image.src = path;

        fullGuess = '';
        hasGuessed = false;
        if (triesMoreThanOne == false)
        {
            numGuessEndless += 1;  
        }
        numGuessEndless = 0;

        triesMoreThanOne = false;

        try
        {
            var highScore = window.localStorage.getItem('highScore');

            if (highScore == null || highScore == undefined || highScore == 'NaN')
            {
                highScore = 0;  
            }

            if (numGuessEndless > highScore)
            {
                window.localStorage.setItem('highScore', numGuessEndless.toString());  

                highScore = parseInt(window.localStorage.getItem('highScore'));
            }

            if (isSmallScreen)
            {
                flagle.innerHTML = numGuessEndless + ' | ' + highScore;
            }

            else
            {
                flagle.innerHTML = 'Flagle | ' + numGuessEndless + ' | ' + highScore;  
            }
            if (mode == 'endless' && document.getElementById('lastFlag').innerHTML != '')
            {
                canSkip = false;
                skip.disabled = true;
                setTimeout(function() {
                    var lastFlag = document.getElementById('lastFlag');
                    lastFlag.innerHTML = '';
                    canSkip = true;
                    skip.disabled = false;
                }, 2000);
            }
        }
        catch (e)
        {
            alert(e);  
        }
    }

    updateSides();
}

function getDOY()
{
    var now = new Date();
    var start = new Date(now.getUTCFullYear(), 0, 0);
    var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);

    day = Math.floor((now - new Date(now.getUTCFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

    return day;
}

function changeFunc(isDelete)
{
    /*setTimeout(function() {
                            var lastFlag = document.getElementById('lastFlag');
                            lastFlag.innerHTML = '';
                            canSkip = true;
                            document.getElementById('skip').disabled = false;
                        }, 3000);*/
    //alert(change);

    try
    {
        setTimeout(function() {
            var area = currentInput;
            if (area != null)
            {
                if (area.value != undefined && area.disabled == false)
                {
                    fullGuess = area.value.toLowerCase();  
                    updateSides(isDelete);
                }  
            }
        }, 10);
    }

    catch (e)
    {
        alert(e);  
    }
}

var first = true;

function changeColor()
{
    try
    {
        if (color == 'light')
        {
            document.documentElement.style.setProperty('--BGColorGradient', 'rgb(207, 211, 205)');
            document.documentElement.style.setProperty('--BGColor', 'rgb(100, 100, 100)');
            document.documentElement.style.setProperty('--FontColor', 'black');
            document.documentElement.style.setProperty('--InverseFontColor', 'white');
            document.documentElement.style.setProperty('--BorderColorNonSettings', 'rgb(calc(47 * 1.5), calc(53 * 1.5), calc(59 * 1.5))');   
            document.documentElement.style.setProperty('--BackgroundColorNonSettings', 'rgb(145, 140, 121)');
            document.documentElement.style.setProperty('--OverlayColor', 'rgb(125, 125, 125');
            document.documentElement.style.setProperty('--LG', '90deg');

            document.getElementById('changeBright').innerHTML = '🌙';
        }

        else
        {
            document.documentElement.style.setProperty('--BGColor', 'rgb(24, 24, 24)');
            document.documentElement.style.setProperty('--BGColorGradient', 'rgb(24, 24, 24)');
            document.documentElement.style.setProperty('--FontColor', 'white');
            document.documentElement.style.setProperty('--InverseFontColor', 'white');
            document.documentElement.style.setProperty('--BorderColorNonSettings', 'darkred');   
            document.documentElement.style.setProperty('--BackgroundColorNonSettings', 'rgb(153, 115, 107)');
            /*background: linear-gradient(90deg, var(--BackgroundColorNonSettings), 45%, var(--BGColorGradient));*/
            document.documentElement.style.setProperty('--OverlayColor', 'rgb(85, 85, 85');

            document.getElementById('changeBright').innerHTML = '☀️';

            document.documentElement.style.setProperty('--LG', '270deg');
        }

        if (first == false)
        {  
            document.getElementById('changeBright').disabled = true;

            setTimeout(function()
                       {
                document.getElementById('changeBright').disabled = false;

                first = true;
            }, 2000);
        }

        else
        {
            first = false;  
        }
    }

    catch (e)
    {
        alert('CHANGE COLORS: ' + e);  
    }
    window.localStorage.setItem('style', color);
}

function changeColors(preColor = '')
{
    if (preColor != '')
    {
        color = preColor;  
    }

    else
    {
        if (color == 'dark')
        {
            color = 'light';  
        }
        else
        {
            color = 'dark';  
        }
    }

    changeColor();
}

function getDateAndChange()
{
    let date = new Date();
    var hour = date.getUTCHours();
    var seed = -1;

    seed = getDOY();

    if (hour < 12)
    {
        seed = seed - 1;  
    }

    if (window.localStorage.getItem('lastUpdate') != seed.toString() || window.localStorage.getItem('lastUpdate') == null)
    {
        if (hour >= 12)
        {
            //year + day = seed

            //generate the picture off of the date, and   get if it is already guessed

            seed = getDOY();

            window.localStorage.setItem('hasGuessedDaily', 'false');

            for (let i = 0; i < 8; i++)
            {
                window.localStorage.setItem('guess' + i.toString(), 'undefined');  
            }
        }

        else
        {
            if (seed - parseInt(window.localStorage.getItem('lastUpdate')) != 1)
            {
                window.localStorage.setItem('hasGuessedDaily', 'false');

                for (let i = 0; i < 8; i++)
                {
                    window.localStorage.setItem('guess' + i.toString(), 'undefined');  
                }

                seed = getDOY() - 1;

                window.localStorage.setItem('lastUpdate', seed);
            }

            else
            {
                seed = getDOY() - 1;
            }

            //same thing, but with yesterdays date.
        }  

        numGuess = 0;
        currentInput = document.getElementById('guess' + numGuess);
    }  

    if (seed > 200)
    {
        seed -= 200;
    }

    var lowerImage = currentSet.allPossibleGuessesDaily[seed].toLowerCase();

    lowerImage = lowerImage.split(' ').join('');

    var path = firstPath + lowerImage + ".png";

    image.src = path;

    todayOffset = seed;
    fullGuess = '';
    // alert(seeded);
}

function settings()
{    
    var menu = settingsMenu;

    document.getElementById('lastFlag').style.visibility = 'hidden';

    //alert(menu.style.visibility);

    if (isSmallScreen || wantsSmallScreen)
    {
        var all = countryMenu;

        if (all.style.visibility == 'visible')
        {
            all.style.visibility = 'hidden';  
        }
    }

    try
    {
        if (menu.style.visibility == 'visible')
        {
            document.getElementById('overlay').style.visibility = 'hidden';

            image.style.visibility = 'visible';
            menu.style.visibility = 'hidden';
            area.style.visibility = 'visible';

            cont.style.visibility = 'visible';
            document.getElementById('lastFlag').style.visibility = 'visible';

            document.getElementById('rules').style.visibility = 'hidden';
            
            currentInput.focus();
        }

        else
        {
            document.getElementById('overlay').style.visibility = 'visible';
            cont.style.visibility = 'hidden';

            image.style.visibility = 'hidden';
            menu.style.visibility = 'visible';
            area.style.visibility = 'hidden';

            document.getElementById('rules').style.visibility = 'hidden';
        }
    }

    catch (e)
    {
        alert("SETTINGS: " + e);  
    }
}

function normalSet()
{
    try
    {
        if (mode == 'endless')
        {
            allDayOffset = [];

            change[10].style.backgroundColor = 'rgb(0, 255, 0)';
            change[11].style.backgroundColor = 'rgb(94, 106, 108)';

            currentSet = countrySet; 
            currentSetIsUS = false;

            screen1();

            area.innerHTML = '';

            todayOffset = parseInt(Math.random() * currentSet.allPossibleGuesses.length);

            while (allDayOffset.includes(todayOffset))
            {
                //alert('includes: ' + allPossibleGuesses[todayOffset]); //
                todayOffset = parseInt(Math.random() * currentSet.allPossibleGuesses.length);
            }

            numGuess = 0;
            numGuessEndless = 0;

            firstPath = "flags197/";

            createNewInputAndLabel();

            setTimeout(function()
                       {
                currentInput = document.getElementById('guess' + numGuess);
                currentInput.focus();
            }, 10);

            var highScore = window.localStorage.getItem('highScore');

            if (highScore == null || highScore == undefined || highScore == 'NaN')
            {
                highScore = 0;  
            }

            var flag = flagle;

            flag.innerHTML = 'Flagle | ' + numGuessEndless + ' | ' + highScore;

            flag.style.fontSize = '35px';

            if (isSmallScreen)
            {
                flag.innerHTML = numGuessEndless + ' | ' + highScore;
                flag.style.fontSize = '26px';  
            }

            document.getElementById('viewCountries').innerHTML = 'Country Menu';

            document.getElementById('overlay').style.visibility = 'hidden';

            if (countryMenu.style.visibility == 'visible')
            {
                countryMenu.style.visibility = 'hidden';
                image.style.visibility = 'visible';
            }

            if (settingsMenu.style.visibility == 'visible')
            {
                settingsMenu.style.visibility = 'hidden';
                image.style.visibility = 'visible';
            }

            area.style.visibility = 'visible';

            document.getElementById("viewCountries").style.visibility = 'visible';

            var lowerImage = currentSet.allPossibleGuesses[todayOffset].toLowerCase();

            lowerImage = lowerImage.split(' ').join('');

            //image.src ="flags197/" + lowerImage + ".png";

            var path = "flags197/" + lowerImage + ".png";

            image.src = path;

            updateSideText();

            updateSides();
        }

    }

    catch (e)
    {
        alert(e);  
    }
}

function stateSet()
{
    allDayOffset = [];

    if (true)
    {
        currentSet = usSet; 
        currentSetIsUS = true;

        if (mode != 'endless')
        {
            mode = 'daily';

            changeMode();
        }

        change[11].style.backgroundColor = 'rgb(0, 255, 0)';
        change[10].style.backgroundColor = 'rgb(94, 106, 108)';

        document.getElementById('viewCountries').innerHTML = 'State Menu';

        screen2();

        area.innerHTML = '';

        todayOffset = parseInt(Math.random() * currentSet.allPossibleGuesses.length);

        while (allDayOffset.includes(todayOffset))
        {
            //alert('includes: ' + allPossibleGuesses[todayOffset]); //
            todayOffset = parseInt(Math.random() * currentSet.allPossibleGuesses.length);
        }

        image.style.filter = 'none';

        numGuess = 0;
        numGuessEndless = 0;

        firstPath = "flagsUS/";

        isHard = true;
        canGetOut = true;
        
        document.getElementById("hard").disabled = false;
        
        changeDiff();

        createNewInputAndLabel();

        setTimeout(function()
                   {
            currentInput = document.getElementById('guess' + numGuess);
            currentInput.focus();
        }, 10);

        var highScore = window.localStorage.getItem('highScoreUS');

        if (highScore == null || highScore == undefined || highScore == 'NaN')
        {
            highScore = 0;  
        }

        var flag = flagle;

        flag.innerHTML = 'Flagle | ' + numGuessEndless + ' | ' + highScore;

        flag.style.fontSize = '35px';

        if (isSmallScreen)
        {
            flag.innerHTML = numGuessEndless + ' | ' + highScore;
            flag.style.fontSize = '26px';  
        }

        document.getElementById('overlay').style.visibility = 'hidden';

        if (countryMenu.style.visibility == 'visible')
        {
            countryMenu.style.visibility = 'hidden';
            image.style.visibility = 'visible';
        }

        if (settingsMenu.style.visibility == 'visible')
        {
            settingsMenu.style.visibility = 'hidden';
            image.style.visibility = 'visible';
        }

        area.style.visibility = 'visible';

        document.getElementById("viewCountries").style.visibility = 'visible';

        updateSideText();

        updateSides();

        var menu = countryMenu;

        menu.innerHTML = '';

        for (let i = 0; i < currentSet.allPossibleGuessesCapital.length; i++)
        {
            var newP = document.createElement('p');

            newP.innerHTML = currentSet.allPossibleGuessesCapital[i] + "\n";

            menu.appendChild(newP);
        }

        var lowerImage = currentSet.allPossibleGuesses[todayOffset].toLowerCase();

        lowerImage = lowerImage.split(' ').join('');

        //image.src ="flags197/" + lowerImage + ".png";

        var path1 = firstPath + lowerImage + ".png";

        image.src = path1;
        //alert(path);
    }
}

function changeModeDaily()
{
    try
    {
        mode = 'endless';

        normalSet();

        changeMode();

        document.getElementById('viewCountries').style.visibility = 'hidden';

        settingsMenu.style.visibility = 'hidden';

        countryMenu.style.visibility = 'hidden';
        image.style.visibility = 'visible';
        guessArea.style.visibility = 'visible';
    }

    catch(e)
    {
        alert(e);  
    }
}

function changeModeEndless()
{
    try
    {
        mode = 'daily';

        changeMode();
    }

    catch (e)
    {
        alert(e);  
    }
}

function changeMode()
{
    fullGuess = '';
    var flag = flagle;

    var last = document.getElementById('lastFlag');

    last.innerHTML = '';

    if (mode == 'daily')
    {
        mode = 'endless';  

        last.style.top = '81%';

        change[5].style.backgroundColor = 'rgb(0, 255, 0)';
        change[4].style.backgroundColor = 'rgb(94, 106, 108)';

        skip.style.visibility = 'visible';  

        area.innerHTML = '';

        todayOffset = parseInt(Math.random() * currentSet.allPossibleGuesses.length);

        while (allDayOffset.includes(todayOffset))
        {
            //alert('includes: ' + allPossibleGuesses[todayOffset]); //
            todayOffset = parseInt(Math.random() * currentSet.allPossibleGuesses.length);
        }

        numGuess = 0;
        numGuessEndless = 0;

        createNewInputAndLabel();

        currentInput = document.getElementById('guess' + numGuess);

        setTimeout(function()
                   {
            currentInput.focus();
        }, 10);
        var highScore = window.localStorage.getItem('highScore');

        if (highScore == null || highScore == undefined || highScore == 'NaN')
        {
            highScore = 0;  
        }

        flag.innerHTML = 'Flagle | ' + numGuessEndless + ' | ' + highScore;

        flag.style.fontSize = '35px';

        if (isSmallScreen)
        {
            flag.innerHTML = numGuessEndless + ' | ' + highScore;
            flag.style.fontSize = '26px';  
        }

        //document.getElementById('changeMode').innerHTML = 'Change to Daily';
    }

    else
    {
        mode = 'daily';

        last.style.top = '92.5%';

        if (currentSetIsUS)
        {
            firstPath = 'flags197/';

            currentSet = countrySet;

            updateSideText();
        }

        skip.style.visibility = 'hidden';  

        change[4].style.backgroundColor = 'rgb(0, 255, 0)';
        change[5].style.backgroundColor = 'rgb(94, 106, 108)';

        // document.getElementById('changeMode').innerHTML = 'Change to Endless';

        numGuess = 0;
        numGuessEndless = 0;

        flag.innerHTML = 'Flagle';

        flag.style.fontSize = '35px';  

        try
        {
            area.innerHTML = '';
            var max = window.localStorage.getItem('guess') || 1; 

            var count2 = 0; 

            for (let i = 0; i < max; i++)
            {
                var t = window.localStorage.getItem('guess' + i.toString());

                if (t != 'undefined')
                {
                    createNewInputAndLabel(i);

                    var inputBox = document.getElementById('guess' + i.toString());
                    var label = document.getElementById('guess' +i.toString() + 'Label');

                    inputBox.value = t;

                    inputBox.disabled = 'true';

                    if (max - i == 1)
                    {
                        label.innerHTML = '✅';  
                    }

                    else
                    {
                        label.innerHTML = '❌';  
                    }

                    count2 = count2 + 1;
                }  
            }

            if (document.getElementById('guess' + 0) == undefined)
            {
                createNewInputAndLabel();  
            }

            getDateAndChange();

            if (count2 > 7 &&  currentSet.allPossibleGuessesDaily[todayOffset] != window.localStorage.getItem('guess' + 7))
            {
                var lastFlag = document.getElementById('lastFlag');

                lastFlag.innerHTML = 'The Flag Is: ' + currentSet.allPossibleGuessesDailyCapital[todayOffset];
                lastFlag.style.visibility ='visible';  

                document.getElementById('guess7Label').innerHTML = '❌';
            }
        }

        catch (e)
        {
            alert(e);  
        }

        currentInput = document.getElementById('guess' + numGuess);

        updateSides();
    }

    try
    {
        var menu =  settingsMenu;

        if (menu.style.visibility == 'hidden')
        {
            document.getElementById('overlay').style.visibility = 'visible';

            menu.style.visibility = 'visible';  

            image.style.visibility = 'hidden';
            area.style.visibility = 'hidden';
        }

        else
        {
            menu.style.visibility = 'hidden';

            image.style.visibility = 'visible';
            area.style.visibility = 'visible';

            document.getElementById('overlay').style.visibility = 'hidden';
        }
    }

    catch (e)
    {
        alert(e);
    }

    if (mode == 'endless')
    { 
        var lowerImage = currentSet.allPossibleGuesses[todayOffset].toLowerCase();
        lowerImage = lowerImage.split(' ').join('');
        var path = firstPath + lowerImage + ".png";
        image.src = path;
    }

    else
    {
        var lowerImage = currentSet.allPossibleGuessesDaily[todayOffset].toLowerCase();
        lowerImage = lowerImage.split(' ').join('');
        var path = firstPath + lowerImage + ".png";
        image.src = path;
    }
}

function changeAutoCompleteMode(change = 1)
{
    autoCompleteMode += change;

    if (autoCompleteMode > 2)
    {
        autoCompleteMode = 0;  
    }

    if (autoCompleteMode == 0)
    {
        document.getElementById('currentMode').innerHTML = 'Auto Complete Mode: Auto Complete Off';
    }
    if (autoCompleteMode == 1)
    {
        document.getElementById('currentMode').innerHTML = 'Auto Complete Mode: Auto Complete with Enter';
    }
    if (autoCompleteMode == 2)
    {
        document.getElementById('currentMode').innerHTML = 'Auto Complete Mode: Auto Complete Automatically';
    }

    window.localStorage.setItem('autoCompleteMode', autoCompleteMode);
}

function autoMode1()
{
    autoCompleteMode = 0;

    if (autoCompleteMode == 0)
    {
        document.getElementById('currentMode').innerHTML = 'Auto Complete Mode: Auto Complete Off';
    }

    change[1].style.backgroundColor = 'rgb(0, 255, 0)';

    change[2].style.backgroundColor = 'rgb(94, 106, 108)';

    change[3].style.backgroundColor = 'rgb(94, 106, 108)';

    window.localStorage.setItem('autoCompleteMode', autoCompleteMode);
}

function autoMode2()
{
    autoCompleteMode = 1;

    if (autoCompleteMode == 1)
    {
        document.getElementById('currentMode').innerHTML = 'Auto Complete Mode: Auto Complete with Enter';
    }

    change[1].style.backgroundColor = 'rgb(94, 106, 108)';

    change[2].style.backgroundColor = 'rgb(0, 255, 0)';

    change[3].style.backgroundColor = 'rgb(94, 106, 108)';

    window.localStorage.setItem('autoCompleteMode', autoCompleteMode);
}

function autoMode3()
{
    autoCompleteMode = 2;

    if (autoCompleteMode == 2)
    {
        document.getElementById('currentMode').innerHTML = 'Auto Complete Mode: Auto Complete Automatically';
    }

    change[1].style.backgroundColor = 'rgb(94, 106, 108)';

    change[2].style.backgroundColor = 'rgb(94, 106, 108)';

    change[3].style.backgroundColor = 'rgb(0, 255, 0)';

    window.localStorage.setItem('autoCompleteMode', autoCompleteMode);
}

function updateSideText()
{
    leftDiv.innerHTML = '';
    leftDiv2.innerHTML = '';
    rightDiv.innerHTML = '';
    rightDiv2.innerHTML = '';

    allLeftDivElement = [];
    allLeftDivElement2 = [];
    allRightDivElement = [];
    allRightDivElement2 = [];

    if (isSmallScreen || wantsSmallScreen)
    {
        document.getElementById("viewCountries").style.visibility = 'visible';

        return;  
    }

    else
    {
        leftDiv.style.visibility = 'visible';
        leftDiv2.style.visibility = 'visible';
        rightDiv.style.visibility = 'visible';
        rightDiv2.style.visibility = 'visible';
    }

    for (let i = 0; i < currentSet.allLeftText.length; i++)
    {
        var text = currentSet.allLeftText[i];

        //let newP = document.createElement('p');
        let newP = document.createElement('p');
        //alert(test);

        //alert(newP):

        newP.innerHTML = text;

        leftDiv.appendChild(newP);

        allLeftDivElement.push(newP);
    }  

    for (let i = 0; i < currentSet.allLeftText2.length; i++)
    {
        var text = currentSet.allLeftText2[i];

        //let newP = document.createElement('p');
        let newP = document.createElement('p');
        //alert(test);

        //alert(newP):

        newP.innerHTML = text;

        leftDiv2.appendChild(newP);

        allLeftDivElement2.push(newP);
    } 

    for (let i = 0; i < currentSet.allRightText.length; i++)
    {
        var text = currentSet.allRightText[i];

        var newP = document.createElement('p');

        newP.innerHTML = text;

        rightDiv.appendChild(newP);

        allRightDivElement.push(newP);
    }

    for (let i = 0; i < currentSet.allRightText2.length; i++)
    {
        var text = currentSet.allRightText2[i];

        var newP = document.createElement('p');

        newP.innerHTML = text;

        rightDiv2.appendChild(newP);

        allRightDivElement2.push(newP);
    }
}

function updateSides(isDelete = false)
{
    var allCountriesLeft = [];

    try
    {   
        if (isSmallScreen || wantsSmallScreen)
        {            
            var fullSize = fullGuess.length;

            for (let i = 0; i < currentSet.allPossibleGuesses.length; i++)
            {
                var text = currentSet.allPossibleGuesses[i];
                var count = 0;

                for (let i = 0; i < fullSize; i++)
                {   
                    if (fullGuess[i] == text[i])
                    {
                        count = count + 1;  
                    }
                }

                if (count == fullSize)
                { 
                    allCountriesLeft.push(currentSet.allPossibleGuessesCapital[i]);
                }
            }

            var menu = countryMenu;

            menu.innerHTML = '';

            for (let i = 0; i < allCountriesLeft.length; i++)
            {
                var newP = document.createElement('p');

                newP.innerHTML = allCountriesLeft[i] + "\n";

                menu.appendChild(newP);
            }

            //alert(isDelete);

            /*if (allCountriesLeft.length == 1 && autoCompleteMode == 2 && isDelete == false)
            {
                 fullGuess = allCountriesLeft[0];
            document.getElementById('guess' + numGuess).value = fullGuess;

            blockInput = true;
            document.getElementById('guess' + numGuess).disabled = true;

            setTimeout(function()
                       {
                blockInput = false;
                document.getElementById('guess' + numGuess).disabled = false;
                document.getElementById('guess' + numGuess).focus();
            }, 1000);
            }*/

            if (allCountriesLeft.length == 1 && isDelete == false)
            {
                allIndexes.push(allCountriesLeft[0].toLowerCase());  
                fullWordGuess = true;
            }

            else if (allCountriesLeft.length == 0)
            {
                allIndexes = [];  
            }

            else
            {
                fullWordGuess = false;  

                allIndexes = [];
            }
        }

        else
        {  
            if (currentSetIsUS)
            {
                if (leftDiv.style.visibility != 'hidden')
                {
                    leftDiv.style.visibility = 'hidden';
                    leftDiv2.style.visibility = 'hidden';
                    rightDiv.style.visibility = 'hidden';
                    rightDiv2.style.visibility = 'hidden';
                }
            }

            else
            {
                if (leftDiv.style.visibility != 'visible')
                {
                    leftDiv.style.visibility = 'visible';
                    leftDiv2.style.visibility = 'visible';
                    rightDiv.style.visibility = 'visible';
                    rightDiv2.style.visibility = 'visible';  
                }
            }

            var isHidden = leftDiv.style.visibility == 'hidden';

            var fullSize = fullGuess.length;

            for (let i = 0; i < currentSet.allLeftText.length; i++)
            {
                var text = currentSet.allLeftText[i].toLowerCase();
                var count = 0;

                for (let i = 0; i < fullSize; i++)
                {   
                    if (fullGuess[i] == text[i])
                    {
                        count = count + 1;  
                    }
                }

                if (count == fullSize)
                {
                    if (!isHidden)
                    {
                        allLeftDivElement[i].style.opacity = "1";  
                    }
                    allIndexes.push(text);
                }

                else
                {
                    if (!isHidden)
                    {
                        allLeftDivElement[i].style.opacity = "0.1";  
                    }
                }
            }  

            for (let i = 0; i < currentSet.allLeftText2.length; i++)
            {
                var text = currentSet.allLeftText2[i].toLowerCase();
                var count = 0;

                for (let i = 0; i < fullSize; i++)
                {   
                    if (fullGuess[i] == text[i])
                    {
                        count = count + 1;  
                    }
                }

                if (count == fullSize)
                {
                    if (!isHidden)
                    {
                        allLeftDivElement2[i].style.opacity = "1";  
                    }
                    allIndexes.push(text);
                }

                else
                {
                    if (!isHidden)
                    {
                        allLeftDivElement2[i].style.opacity = "0.1";  
                    }
                }
            }

            for (let i = 0; i < currentSet.allRightText.length; i++)
            {
                var text = currentSet.allRightText[i].toLowerCase();
                var count = 0;

                for (let i = 0; i < fullSize; i++)
                {   
                    if (fullGuess[i] == text[i])
                    {
                        count = count + 1;  
                    }
                }

                if (count == fullSize)
                {
                    if (!isHidden)
                    {
                        allRightDivElement[i].style.opacity = "1";  
                    }
                    allIndexes.push(text);
                }

                else
                {
                    if (!isHidden)
                    {
                        allRightDivElement[i].style.opacity = "0.1";  
                    }
                }
            }

            for (let i = 0; i < currentSet.allRightText2.length; i++)
            {
                var text = currentSet.allRightText2[i].toLowerCase();
                var count = 0;

                for (let i = 0; i < fullSize; i++)
                {   
                    if (fullGuess[i] == text[i])
                    {
                        count = count + 1;  
                    }
                }

                if (count == fullSize)
                {

                    if (!isHidden)
                    {
                        allRightDivElement2[i].style.opacity = "1";  
                    }
                    allIndexes.push(text);
                }

                else
                {

                    if (!isHidden)
                    {
                        allRightDivElement2[i].style.opacity = "0.1";  
                    }
                }
            }
        }

        if (allIndexes.length == 1 && isDelete == false && autoCompleteMode == 2)
        {
            fullGuess = allIndexes[0];
            document.getElementById('guess' + numGuess).value = fullGuess;

            blockInput = true;
            document.getElementById('guess' + numGuess).disabled = true;

            setTimeout(function()
                       {
                blockInput = false;
                document.getElementById('guess' + numGuess).disabled = false;
                document.getElementById('guess' + numGuess).focus();
            }, 1000);
        }

        if (allIndexes.length != 1)
        {
            allIndexes = [];  
        }
    }

    catch (e)
    {
        alert('sides ' + e);  
    }
}

function createNewInputAndLabel(i = -1)
{
    if (i == -1)
    {
        i = numGuess;  
    }

    var newGuess = area;

    var newGuessArea = document.createElement("input");
    try
    {
        newGuessArea.id = "guess" + i;
        //newGuessArea.placeholder = 'Guess A Country...';
    }
    catch (e)
    {
        alert(e);  
    }

    var newGuessLabel = document.createElement("label");

    var testing = document.createElement('div');
    testing.style.height = '5px';
    testing.style.paddingTop = '0px';
    //testing.style.visibility = 'hidden';

    newGuessLabel.for = "guess" + i;
    newGuessLabel.innerHTML = "❓";
    //newGuess.style.height = '26px';
    // newGuess.style.fontSize = '21px';
    // newGuess.style.paddingTop = '2px';
    newGuessLabel.id = "guess" + i + "Label";

    newGuess.appendChild(newGuessArea);
    newGuess.appendChild(newGuessLabel);
    newGuess.appendChild(testing);

    newGuessArea.focus();  
}

window.onload = function()
{
    countrySet = new Countries();
    usSet = new UnitedStates();

    currentSet = countrySet;

    image = document.getElementById('currentFlag');
    skip = document.getElementById('skip');
    flagle = document.getElementById('Flagle');
    area = document.getElementById("guessArea");
    cont = document.getElementById('cont');

    for (let i = 1; i < 12; i++)
    {
        change.push(document.getElementById('change' + i));  
    }

    change[10].style.backgroundColor = 'rgb(0, 255, 0)';
    change[11].style.backgroundColor = 'rgb(94, 106, 108)';

    change[9].style.backgroundColor = 'rgb(94, 106, 108)';
    change[8].style.backgroundColor = 'rgb(0, 255, 0)';

    body = document.getElementsByTagName("body")[0].style;

    changeDiff();  

    change[4].style.backgroundColor = 'rgb(0, 255, 0)';
    change[5].style.backgroundColor = 'rgb(94, 106, 108)';

    if (window.localStorage.getItem('blind') == 'true')
    {
        change[7].style.backgroundColor = 'rgb(0, 255, 0)';
        change[6].style.backgroundColor = 'rgb(94, 106, 108)';  
    }

    else
    {
        change[6].style.backgroundColor = 'rgb(0, 255, 0)';
        change[7].style.backgroundColor = 'rgb(94, 106, 108)';  
    }

    try
    {
        if (window.localStorage.getItem('style') != null)
        {
            changeColors(window.localStorage.getItem('style'));
        }

        else
        {
            changeColor();
        } 
    }

    catch (e)
    {
        alert(e);  
    }

    leftDiv = document.getElementById('leftDiv');
    leftDiv2 = document.getElementById('leftDiv2');
    rightDiv = document.getElementById('rightDiv');
    rightDiv2 = document.getElementById('rightDiv2');

    document.onmousemove = function(e){mouseX = e.clientX; mouseY = e.clientY;};

    updateSideText();

    autoCompleteMode = parseInt(window.localStorage.getItem('autoCompleteMode'));

    var changeBright = document.getElementById('changeBright');

    var hasSeenStars = false;

    changeBright.onmouseover = function()
    {
        if (changeBright.disabled == false)
        {
            if (color == 'light' && hasSeenStars == false)
            {
                document.getElementById("starHolder").style.transitionDuration = '0s';
                document.getElementById("starHolder").style.opacity = '1';

                hasSeenStars = true;

                try
                {
                    setTimeout(function()
                               {
                        var stars = document.getElementsByClassName("star");

                        for (var i = 0; i < stars.length; i++)
                        {
                            var star = stars[i];

                            star.classList.add("start");
                        }  

                        hasSeenStars = false;
                    }, 200);
                }

                catch (e)
                {
                    alert(e);   
                }
            }
        }
    };

    changeBright.onmouseleave = function()
    {
        if (color == 'light')
        {
            document.getElementById("starHolder").style.transitionDuration = '1.1s';
            document.getElementById("starHolder").style.opacity = '0';

            hasSeenStars = true;

            setTimeout(function()
                       {
                var stars = document.getElementsByClassName("star");

                for (var i = 0; i < stars.length; i++)
                {
                    var star = stars[i];

                    star.classList.remove("start");
                }  

                hasSeenStars = false;
            }, 300);
        }
    };

    if (autoCompleteMode == 0 || (autoCompleteMode != 1 && autoCompleteMode != 2))
    {
        document.getElementById('currentMode').innerHTML = 'Auto Complete Mode: Auto Complete Off';

        change[1].style.backgroundColor = 'rgb(0, 255, 0)';

        change[2].style.backgroundColor = 'rgb(94, 106, 108)';

        change[3].style.backgroundColor = 'rgb(94, 106, 108)';
    }

    else if (autoCompleteMode == 1)
    {
        document.getElementById('currentMode').innerHTML = 'Auto Complete Mode: Auto Complete with Enter';

        change[1].style.backgroundColor = 'rgb(94, 106, 108)';

        change[2].style.backgroundColor = 'rgb(0, 255, 0)';

        change[3].style.backgroundColor = 'rgb(94, 106, 108)';
    }

    else if (autoCompleteMode == 2)
    {
        document.getElementById('currentMode').innerHTML = 'Auto Complete Mode: Auto Complete Automatically';

        change[1].style.backgroundColor = 'rgb(94, 106, 108)';

        change[2].style.backgroundColor = 'rgb(94, 106, 108)';

        change[3].style.backgroundColor = 'rgb(0, 255, 0)';
    }

    else
    {
        alert(autoCompleteMode);   
    }
    let date = new Date();
    if (mode == 'endless')
    {
        skip.style.visibility = 'visible';  
    }
    else
    {
        skip.style.visibility = 'hidden';  
    }

    if (mode == 'daily')
    {
        try
        {
            //get the current time. if it is past 12, generate the saily one based on todays data.
            //and, get the guesses from todays data, but if it is less than 12, 
            // get the guesses and the flag from yesterdays data..

            getDateAndChange();

            var max = window.localStorage.getItem('guess') || 1; 

            var count2 = 0;
            var hasGuessedD = false;

            for (let i = 0; i < max; i++)
            {
                var string = window.localStorage.getItem('guess' + i.toString());              

                if (string == 'hint')
                {
                    usedHintDaily = true;  
                }

                if (string != 'undefined')
                {                    
                    createNewInputAndLabel(i);

                    var inputBox = document.getElementById('guess' + i.toString());
                    var label = document.getElementById('guess' +i.toString() + 'Label');

                    inputBox.value = string;

                    inputBox.disabled = 'true';

                    if (max - i == 1 && string == currentSet.allPossibleGuessesDaily[todayOffset])
                    {
                        label.innerHTML = '✅';  
                        hasGuessedD = true;
                    }

                    else if (max - i == 1 && window.localStorage.getItem('hasGuessedDaily') == 'false')
                    {
                        var guessCont = currentSet.allContinentsDaily[currentSet.allPossibleGuessesDaily.indexOf(string)];

                        var actualCont = currentSet.allContinentsDaily[currentSet.allPossibleGuessesDaily.indexOf(currentSet.allPossibleGuessesDaily[todayOffset])];

                        if (guessCont == 'asia' || guessCont == 'europe')
                        {
                            guessCont = 'eurasia';  
                        }

                        if (actualCont == 'asia' || actualCont == 'europe')
                        {
                            actualCont = 'eurasia';  
                        }

                        if (guessCont == actualCont)
                        {
                            label.innerHTML = '☑';
                        }

                        else
                        {
                            label.innerHTML = '❌';  
                        }
                        createNewInputAndLabel(i + 1);  
                    }

                    else
                    {
                        var guessCont = currentSet.allContinentsDaily[currentSet.allPossibleGuessesDaily.indexOf(string)];

                        var actualCont = currentSet.allContinentsDaily[currentSet.allPossibleGuessesDaily.indexOf(currentSet.allPossibleGuessesDaily[todayOffset])];

                        if (guessCont == 'asia' || guessCont == 'europe')
                        {
                            guessCont = 'eurasia';  
                        }

                        if (actualCont == 'asia' || actualCont == 'europe')
                        {
                            actualCont = 'eurasia';  
                        }

                        if (guessCont == actualCont)
                        {
                            label.innerHTML = '☑';
                        }

                        else
                        {
                            label.innerHTML = '❌';  
                        }
                    }

                    count2 = count2 + 1;
                    numGuess = numGuess + 1;
                    allCountriesGuessed.push(string);
                }  

                currentInput = document.getElementById('guess' + numGuess);
            }


            if (count2 > 7 && currentSet.allPossibleGuessesDaily[todayOffset] != window.localStorage.getItem('guess7'))
            {
                var lastFlag = document.getElementById('lastFlag');

                lastFlag.innerHTML = 'The Flag Is: ' + currentSet.allPossibleGuessesDailyCapital[todayOffset];
                lastFlag.style.visibility ='visible';  

                document.getElementById('guess7Label').innerHTML = '❌';
            }

            if (document.getElementById('guess' + 0) == undefined)
            {
                createNewInputAndLabel();  
            }
        }

        catch (e)
        {
            alert(e);  
        }
    }

    //get autocomplete mode if it exists
    try
    {
        if (window.localStorage['autoCompleteMode'] != null)
        {
            autoCompleteMode = parseInt(window.localStorage['autoCompleteMode']);

            changeAutoCompleteMode(0);
        }
    }

    catch (e)
    {
        alert(e);  
    }

    fullGuess = '';

    for (let i = 0; i < numGuess; i++)
    {
        if (document.getElementById('guess' + i + 'Label').innerHTML == '❓')
        {
            document.getElementById('guess' + i + 'Label').innerHTML = '❌';
        }
    }

    currentInput = document.getElementById('guess' + numGuess);
    countryMenu = document.getElementById('allCountriesMenu');
    settingsMenu = document.getElementById('settingsMenu');

    var width = window.innerWidth;
    document.getElementById('viewCountries').style.visibility = 'hidden';
    if (width < 1413)
    {
        //show list of countries by clicking on button instead of side rows

        leftDiv.style.visibility = 'hidden';
        leftDiv2.style.visibility = 'hidden';
        rightDiv.style.visibility = 'hidden';
        rightDiv2.style.visibility = 'hidden';

        isSmallScreen = true;

        var flag = flagle;

        flag.style.fontSize = '25px';  

        flag.style.top = "50%";
        flag.style.transform = "translate(0, -50%)";
    }

    if (window.localStorage.getItem('small') == 'true')
    {
        wantsSmallScreen = true;  
    }

    if (isSmallScreen || wantsSmallScreen)
    {
        document.getElementById('viewCountries').style.visibility = 'visible';  
    }

    try
    {
        var flag = flagle;

        window.onresize = function()
        {
            var width = window.innerWidth;
            var highScore;

            if (!currentSetIsUS)
            {
                highScore = parseInt(window.localStorage.getItem('highScore'));
            }
            else
            {
                highScore = parseInt(window.localStorage.getItem('highScoreUS'));  
            }

            if (width < 1413)
            {
                //show list of countries by clicking on button instead of side rows

                if (settingsMenu.style.visibility == 'visible')
                {
                    settingsMenu.style.visibility = 'hidden';   
                }

                else if (document.getElementById("rules").style.visibility == 'visible')
                {
                    document.getElementById("rules").style.visibility = 'hidden';   
                }

                else if (countryMenu.style.visibility == 'visible')
                {
                    countryMenu.style.visibility = 'hidden';   
                }

                leftDiv.style.visibility = 'hidden';
                leftDiv2.style.visibility = 'hidden';
                rightDiv.style.visibility = 'hidden';
                rightDiv2.style.visibility = 'hidden';

                isSmallScreen = true;

                if (mode == 'endless')
                {
                    flag.innerHTML = numGuessEndless + ' | ' + highScore;
                }
                flag.style.fontSize = '25px';  

                flag.style.top = "50%";
                flag.style.transform = "translate(0, -50%)";

                document.getElementById('viewCountries').style.visibility = 'visible';

                screen();

                currentFlag.style.visibility = 'visible';
                guessArea.style.visibility = 'visible';

                if (mode == 'endless')
                {
                    skip.style.visibility = 'visible';   
                }
            }

            else
            {
                if (!currentSetIsUS)
                {
                    leftDiv.style.visibility = 'visible';
                    leftDiv2.style.visibility = 'visible';
                    rightDiv.style.visibility = 'visible';
                    rightDiv2.style.visibility = 'visible';
                }

                if (settingsMenu.style.visibility == 'visible')
                {
                    settingsMenu.style.visibility = 'hidden';   
                }

                else if (document.getElementById("rules").style.visibility == 'visible')
                {
                    document.getElementById("rules").style.visibility = 'hidden';   
                }

                else if (countryMenu.style.visibility == 'visible')
                {
                    countryMenu.style.visibility = 'hidden';   
                }

                isSmallScreen = false;

                if (mode == 'endless')
                {
                    flag.innerHTML = 'Flagle | ' + numGuessEndless + ' | ' + highScore;
                }

                flag.style.fontSize = '35px';

                if (!wantsSmallScreen && !currentSetIsUS)
                {
                    document.getElementById('viewCountries').style.visibility = 'hidden';
                }

                screen();
            }

            fullGuess = '';
            currentInput.value = fullGuess;
            updateSideText();
            updateSides();
        };

        ;

        var menu = countryMenu;

        for (let i = 0; i < currentSet.allPossibleGuessesCapital.length; i++)
        {
            var newP = document.createElement('p');

            newP.innerHTML = currentSet.allPossibleGuessesCapital[i] + "\n";

            menu.appendChild(newP);
        }
    }

    catch (e)
    {
        alert(e);  
    }

    if (window.localStorage.getItem("rules") != 'seen')
    {
        //see rules menu  

        area.style.visibility = 'hidden';

        currentFlag.style.visibility = 'hidden';

        document.getElementById("rules").style.visibility = 'visible';

        window.localStorage.setItem("rules", "seen");
    }

    document.addEventListener("mousedown", function(event) {
        try
        {
            var elem = document.elementFromPoint(mouseX, mouseY);

            if (elem != null)
            {
                var name = elem.innerHTML;
                name = name.toLowerCase();

                var opacity = window.getComputedStyle(elem).getPropertyValue("opacity");

                name = name.replace(/\n/g, '');

                if (currentSet.allPossibleGuesses.includes(name) && (opacity != 0))
                {
                    if (elem.parentElement.id == 'allCountriesMenu')
                    {
                        fullGuess =  name;

                        var currentGuess = document.getElementById('guess' + numGuess);

                        if (currentGuess != null)
                        {
                            currentGuess.value = fullGuess;
                        }

                        if (isSmallScreen || wantsSmallScreen || currentSet)
                        {
                            countryMenu.style.visibility = 'hidden'; 
                            image.style.visibility = 'visible';
                            area.style.visibility = 'visible';
                        }

                        setTimeout(function()
                                   {
                            currentGuess.focus();
                        }, 10);

                        updateSides();  
                    }
                }

                else
                {
                    if (elem.id == 'overlay')
                    {
                        if (settingsMenu.style.visibility == 'visible')
                        {
                            settings();
                        }

                        else if (document.getElementById('rules').style.visibility == 'visible')
                        {
                            rules();
                        }

                        else if (countryMenu.style.visibility == 'visible')
                        {
                            viewCountries();  
                        }
                        
                        setTimeout(function()
                                   {
                            currentInput.focus();
                        }, 10);
                    }
                }  
            }
        }

        catch (e)
        {
            alert('MOUSEDOWN: ' + e);
        }
    });

    document.addEventListener("keydown", function(event) {
        if (event.key == "Enter")
        {   
            var test = false;

            if (mode == 'daily')
            {
                if (window.localStorage.getItem('hasGuessedDaily') == 'true')
                {
                    test = false;
                }

                else
                {
                    test = true;  
                }
            }

            else
            {
                test = true;  
            }

            if (test)
            {
                try
                {
                    var textAreaInput = document.getElementById("guess" + numGuess);

                    var label = document.getElementById("guess" + numGuess + "Label");                          //alert(label);
                    //alert(numGuess);
                    var guess = textAreaInput.value;

                    guess = guess.toLowerCase();

                    allIndexes = [];
                    updateSides();

                    if (allIndexes.length == 1 && (autoCompleteMode == 2 || autoCompleteMode == 1) && guess != 'uk')
                    {
                        guess = allIndexes[0];  
                        textAreaInput.value = guess;
                    }

                    //guess = guess.split(' ').join('');

                    //alert(guess);

                    if (currentSetIsUS)
                    {
                        switch (guess)
                        {
                            case 'al':
                                guess = 'alabama';
                                break;
                            case 'ak':
                                guess = 'alaska';
                                break;
                            case 'az':
                                guess = 'arizona';
                                break;
                            case 'ar':
                                guess = 'arkansas';
                                break;
                        }
                    }

                    else
                    {
                        switch (guess)
                        {
                            case 'us':
                            case 'usa':
                            case 'america':
                            case 'united states of america':
                                guess = 'united states';
                                break;
                            case 'uae':
                                guess = 'united arab emirates';
                                break;
                            case 'saf':
                                guess = 'south africa';
                                break;
                            case 'car':
                                guess = 'central african republic';
                                break;
                            case 'uk':
                                guess = 'united kingdom';
                                break;
                            case 'drc':
                            case 'democratic republic of the congo':
                                guess = 'democratic republic of congo';
                                break;
                            case 'indonesia':
                                guess = 'monaco';
                                break;
                            case 'cape verde':
                                guess = 'cabo verde';
                                break;
                            case 'east timor':
                                guess = 'timor-leste';
                                break;
                            case 'holy see':
                                guess = 'vatican city';
                                break;
                            case 'cote divoire':
                            case 'teeth coast':
                                guess = 'ivory coast';
                                break;     
                            case 'czech republic':
                                guess = 'czechia';
                                break;
                            default:
                                guess = guess;
                        }
                    }

                    if (guess == '42')
                    {
                        guess = '';
                        textAreaInput.value = guess;

                        var origColor = getComputedStyle(document.getElementsByTagName("body")[0]).getPropertyValue('--BGColorGradient');

                        if (isColorBlind == false)
                        {
                            body.background = 'green';
                        }

                        else
                        {
                            body.background = 'rgb(122, 122, 19)';
                        }

                        setTimeout(function()
                                   {
                            body.background = origColor;
                        }, 700);
                    }

                    if (currentSet.allPossibleGuesses.includes(guess))
                    {
                        textAreaInput.disabled = true;

                        numGuess = numGuess + 1;
                        currentInput = document.getElementById('guess' + numGuess);

                        //alert(guess);
                        var tempGuess = guess.split(' ').join('');
                        //alert(tempGuess);
                        var tempGuess2;
                        allCountriesGuessed.push(guess);

                        try
                        {
                            if (mode == 'daily') 
                            {
                                tempGuess2 = currentSet.allPossibleGuessesDaily[todayOffset].split(' ').join('');
                                window.localStorage['guess'] = numGuess;  

                                for (let i = 0; i < numGuess; i++)
                                {
                                    window.localStorage['guess' + i.toString()] = allCountriesGuessed[i.toString()];
                                }

                                window.localStorage['hasGuessedDaily'] = 'false';

                                if (date.getUTCHours() < 12)
                                {
                                    window.localStorage['lastUpdate'] = getDOY() - 1;
                                }

                                else
                                {
                                    window.localStorage['lastUpdate'] = getDOY();
                                }

                                document.getElementById('lastFlag').innerHTML = '';
                            }
                            else
                            {
                                tempGuess2 = currentSet.allPossibleGuesses[todayOffset].split(' ').join('');  
                            }
                        }

                        catch (e)
                        {
                            alert(e);  
                        }
                        //alert(tempGuess2);

                        setTimeout(function() 
                                   {
                            var lastAbb = document.getElementById('guess' + (numGuess - 1).toString());
                            lastAbb.value = guess;  
                        }, 10);

                        if (tempGuess2 == tempGuess)
                        {
                            label = document.getElementById("guess" + (numGuess - 1) + "Label");

                            allDayOffset.push(todayOffset);
                            label.innerHTML = "✅";

                            if (mode != 'endless')
                            {
                                flagle.innerHTML = 'Flagle';
                            }
                            canGetOut = true;
                            
                            document.getElementById("hard").disabled = false;

                            //document.getElementById('Flagle').innerHTML = 'Flagle - You Guessed the Flag';

                            hasGuessed = true;

                            cont.innerHTML = '';

                            if (mode == 'endless')
                            {
                                //generate random number, and start over
                                var origColor = getComputedStyle(document.getElementsByTagName("body")[0]).getPropertyValue('--BGColorGradient');

                                if (isColorBlind == false)
                                {
                                    body.background = 'green';
                                }
                                else
                                {
                                    body.background = 'rgb(122, 122, 19)';
                                }

                                setTimeout(function()
                                           {
                                    body.background = origColor;
                                }, 700);

                                if (allDayOffset.length == currentSet.allPossibleGuesses.length)
                                {
                                    allDayOffset = [];  
                                }

                                area.innerHTML = '';    

                                numGuess = 0;

                                numGuessEndlessCount = 0;

                                createNewInputAndLabel();

                                currentInput = document.getElementById('guess' + numGuess);

                                todayOffset = parseInt(Math.random() * currentSet.allPossibleGuesses.length);

                                while (allDayOffset.includes(todayOffset))
                                {
                                    //alert('includes: ' + allPossibleGuesses[todayOffset]); //
                                    todayOffset = parseInt(Math.random() * currentSet.allPossibleGuesses.length);
                                }

                                var lowerImage = currentSet.allPossibleGuesses[todayOffset].toLowerCase();

                                lowerImage = lowerImage.split(' ').join('');

                                var path = firstPath + lowerImage + ".png";

                                image.src = path;

                                //document.getElementById('Flagle').innerHTML = 'Flagle';

                                fullGuess = '';
                                hasGuessed = false;
                                if (triesMoreThanOne == false)
                                {
                                    numGuessEndless += 1;  
                                }

                                triesMoreThanOne = false;

                                if (!currentSetIsUS)
                                {
                                    var highScore = window.localStorage['highScore'];

                                    if (highScore == null || highScore == undefined || highScore == 'NaN')
                                    {
                                        highScore = 0;  
                                    }

                                    if (numGuessEndless > highScore)
                                    {
                                        window.localStorage['highScore'] = numGuessEndless.toString();  

                                        var highScore = parseInt(window.localStorage['highScore']);
                                    }
                                }

                                else
                                {
                                    var highScore = window.localStorage['highScoreUS'];

                                    if (highScore == null || highScore == undefined || highScore == 'NaN')
                                    {
                                        highScore = 0;  
                                    }

                                    if (numGuessEndless > highScore)
                                    {
                                        window.localStorage['highScoreUS'] = numGuessEndless.toString();  

                                        var highScore = parseInt(window.localStorage['highScoreUS']);
                                    }  
                                }

                                if (isSmallScreen)
                                {
                                    var flag = flagle;

                                    flag.innerHTML = numGuessEndless + ' | ' + highScore;

                                    flag.style.fontSize = '20px';
                                }

                                else 
                                {
                                    flagle.innerHTML = 'Flagle | ' + numGuessEndless + ' | ' + highScore;
                                }
                            }

                            else if (mode == 'daily')
                            {
                                window.localStorage['guess'] = numGuess;  

                                for (let i = 0; i < numGuess; i++)
                                {
                                    window.localStorage['guess' + i.toString()] = allCountriesGuessed[i.toString()];
                                }

                                window.localStorage['hasGuessedDaily'] = true;
                                var dat = getDOY().toString();
                                if (date.getUTCHours() < 12)
                                {
                                    dat = dat - 1;  
                                }

                                window.localStorage['lastUpdate'] = dat;

                                var origColor = getComputedStyle(document.getElementsByTagName("body")[0]).getPropertyValue('--BGColorGradient');

                                if (isColorBlind == false)
                                {
                                    body.background = 'green';
                                }
                                else
                                {
                                    body.background = 'rgb(122, 122, 19)';
                                }

                                setTimeout(function()
                                           {
                                    body.background = origColor;
                                }, 1000);

                                /* var change = document.createElementById('button');
                                            change.id = 'beDelete';

                                            change.onclick = 
                                                {
                                                    changeMode();
                                                    document.getElementById('beDelete')
                                            };*/
                            }

                            if (mode != 'daily')
                            {
                                fullGuess = '';
                                currentInput.value = '';
                                updateSides();
                                currentInput.value = '';
                                fullGuess = '';
                                updateSides();
                            }

                            else
                            {
                                fullGuess = '';
                                updateSides();
                                fullGuess = '';
                            }
                            //localStorage['numGuess'] = String(numGuess);
                        }

                        else
                        {
                            if (numGuess < 8)
                            {
                                createNewInputAndLabel();
                            }
                            //  alert("guess" + (numGuess - 1) + "Label");
                            //alert(numGuess);
                            //alert(label); 

                            label.innerHTML = "❌";

                            canGetOut = false;
                            
                            document.getElementById("hard").disabled = true;

                            if (mode == 'endless')
                            {
                                try
                                {
                                    allDayOffset= [];

                                    var indexOfGuess = currentSet.allPossibleGuesses.indexOf(guess);

                                    var continentGuessed;
                                    var continentActual;
                                    var canShow = true;
                                    var red = false;

                                    if (currentSet.allContinents.length == 1)
                                    {
                                        continentGuessed = currentSet.allContinents[0];
                                        continentActual = currentSet.allContinents[0];

                                        canShow = false;
                                        red = true;
                                    }

                                    else
                                    {
                                        continentGuessed = currentSet.allContinents[indexOfGuess];
                                        continentActual = currentSet.allContinents[todayOffset];  
                                    }

                                    if (canShow)
                                    {
                                        //var cont1 = continentGuessed.splice(0, 1);

                                        //var cont = continentGuessed[0].toUpperCase() + cont1;
                                        cont.style.visibility = 'visible';

                                        cont.innerHTML = "Your Guess Is In: "+ currentSet.allContinentsCapital[todayOffset];
                                    }

                                    if (continentGuessed == 'asia' || continentGuessed == 'europe')
                                    {
                                        continentGuessed = 'eurasia';  
                                    }

                                    if (continentActual == 'asia' || continentActual == 'europe')
                                    {
                                        continentActual = 'eurasia';  
                                    }

                                    if (continentGuessed == continentActual)
                                    {
                                        var origColor = getComputedStyle(document.getElementsByTagName("body")[0]).getPropertyValue('--BGColorGradient');

                                        if (isColorBlind == false)
                                        {
                                            if (!red)
                                            {
                                                body.background = 'yellow';

                                                setTimeout(function() {
                                                    var label = document.getElementById('guess' + (numGuess - 1) + 'Label');
                                                    label.innerHTML = '☑';
                                                }, 10);
                                            }
                                            else
                                            {
                                                body.background = 'red';  
                                            }
                                        }
                                        else
                                        {
                                            body.background = 'rgb(255, 255, 21)';
                                        }

                                        setTimeout(function()
                                                   {
                                            body.background = origColor;
                                        }, 1000);
                                    }

                                    else
                                    {
                                        var origColor = getComputedStyle(document.getElementsByTagName("body")[0]).getPropertyValue('--BGColorGradient');

                                        var indexOfGuess = currentSet.allPossibleGuesses.indexOf(guess);
                                        var continentGuessed;

                                        var canShow = true;

                                        if (currentSet.allContinents.length == 1)
                                        {
                                            continentGuessed = currentSet.allContinents[0];
                                            canShow = false;
                                        }

                                        else
                                        {
                                            continentGuessed = currentSet.allContinents[indexOfGuess];  
                                        }

                                        if (canShow)
                                        {
                                            cont.style.visibility = 'visible';

                                            cont.innerHTML = "Your Guess Is In: "+ currentSet.allContinentsCapital[indexOfGuess];
                                        }

                                        if (isColorBlind == false)
                                        {
                                            body.background = 'red';
                                        }
                                        else
                                        {
                                            body.background = 'rgb(96, 96, 28)';
                                        }
                                        setTimeout(function()
                                                   {
                                            body.background = origColor;
                                        }, 1000);
                                    }
                                }

                                catch (e)
                                {
                                    alert(e);
                                }

                                numGuessEndless = 0;  
                                numGuessEndlessCount += 1;
                                triesMoreThanOne = true;

                                var highScore;

                                if (!currentSetIsUS)
                                {
                                    highScore = parseInt(window.localStorage['highScore']);
                                }
                                else
                                {
                                    highScore = parseInt(window.localStorage['highScoreUS']);  
                                }

                                if (isSmallScreen)
                                {
                                    flagle.innerHTML = numGuessEndless + ' | ' + highScore;
                                }

                                else
                                {
                                    flagle.innerHTML = 'Flagle | ' + numGuessEndless + ' | ' + highScore;
                                }
                                if (numGuessEndlessCount >= 7)
                                {
                                    numGuessEndlessCount = 0;
                                    skipFlag();  
                                }

                                updateSides();
                            }

                            else
                            {
                                var origColor = getComputedStyle(document.getElementsByTagName("body")[0]).getPropertyValue('--BGColorGradient');

                                var indexOfGuess = currentSet.allPossibleGuessesDaily.indexOf(guess);
                                var continentGuessed;
                                var continentActual;

                                var canShow = true;
                                var red = false;

                                if (currentSet.allContinents.length == 1)
                                {
                                    continentGuessed = currentSet.allContinents[0];
                                    continentActual = currentSet.allContinents[0];

                                    canShow = false;
                                    red = true;
                                }

                                else
                                {
                                    continentGuessed = currentSet.allContinentsDaily[indexOfGuess];
                                    continentActual = currentSet.allContinentsDaily[todayOffset];  
                                }

                                if (continentGuessed == 'asia' || continentGuessed == 'europe')
                                {
                                    continentGuessed = 'eurasia';  
                                }

                                if (continentActual == 'asia' || continentActual == 'europe')
                                {
                                    continentActual = 'eurasia';  
                                }

                                if (canShow)
                                {
                                    cont.style.visibility = 'visible';

                                    cont.innerHTML = "Your Guess Is In: "+ currentSet.allContinentsDailyCapital[indexOfGuess];
                                }

                                if (continentGuessed != continentActual)
                                {
                                    if (isColorBlind == false)
                                    {
                                        body.background = 'red';
                                    }
                                    else
                                    {
                                        body.background = 'rgb(96, 96, 28)';
                                    }
                                }

                                else
                                {
                                    if (isColorBlind == false)
                                    {
                                        if (!red)
                                        {
                                            body.background = 'yellow';

                                            setTimeout(function() {
                                                var label = document.getElementById('guess' + (numGuess - 1) + 'Label');
                                                label.innerHTML = '☑';
                                            }, 10);

                                        }
                                        else
                                        {
                                            body.background = 'red';  
                                        }
                                    }
                                    else
                                    {
                                        body.background = 'rgb(255, 255, 21)';
                                    }
                                }
                                setTimeout(function()
                                           {
                                    body.background = origColor;
                                }, 1000);

                                if (numGuess > 7)
                                {
                                    var lastFlag = document.getElementById('lastFlag');
                                    lastFlag.innerHTML = 'The Flag Is: ' + currentSet.allPossibleGuessesDailyCapital[todayOffset];
                                    lastFlag.style.visibility ='visible';

                                    window.localStorage['guess'] = numGuess;  

                                    for (let i = 0; i < numGuess; i++)
                                    {
                                        window.localStorage['guess' + i.toString()] = allCountriesGuessed[i.toString()];
                                    }

                                    window.localStorage['hasGuessedDaily'] = 'true';
                                    var dat = getDOY().toString();
                                    if (date.getUTCHours() < 12)
                                    {
                                        dat = dat - 1;  
                                    }

                                    window.localStorage['lastUpdate'] = dat;

                                    fullGuess = '';
                                }
                            }

                            //alert('fullGuess');

                            if (numGuess < 8)
                            {
                                fullGuess = '';

                                currentInput = document.getElementById('guess' + numGuess);
                                currentInput.value = fullGuess;
                            }

                            updateSides();
                        }
                    }

                    else
                    {
                        if (guess == 'hint')
                        {
                            if (numGuess >= 1 && mode != 'daily')
                            {
                                textAreaInput.disabled = true;

                                numGuess = numGuess + 1;

                                var tempGuess = guess.split(' ').join('');
                                //alert(tempGuess);
                                var tempGuess2 = currentSet.allPossibleGuesses[todayOffset].split(' ').join('');
                                //alert(tempGuess2);
                                allCountriesGuessed.push(guess);

                                createNewInputAndLabel();

                                currentInput = document.getElementById('guess' + numGuess);

                                //  alert("guess" + (numGuess - 1) + "Label");
                                //alert(numGuess);
                                //alert(label); 

                                label.innerHTML = "❌";

                                if (mode == 'endless')
                                {
                                    numGuessEndless = 0;  
                                    triesMoreThanOne = true;

                                    var highScore = parseInt(window.localStorage['highScore']);

                                    if (numGuessEndless > highScore)
                                    {
                                        window.localStorage['highScore'] = numGuessEndless.toString();  
                                    }

                                    flagle.innerHTML = 'Flagle | ' + numGuessEndless + ' | ' + highScore;
                                }

                                else
                                {

                                }

                                fullGuess = '';
                                guess = currentSet.allPossibleGuesses[todayOffset].toLowerCase();
                                fullGuess += guess[0];
                                currentInput.value = fullGuess;
                            }

                            if (numGuess >= 3 && mode == 'daily' && usedHintDaily == false)
                            {
                                usedHintDaily = true;

                                localStorage.setItem('hint', 'true');

                                textAreaInput.disabled = true;

                                numGuess = numGuess + 1;

                                var tempGuess = guess.split(' ').join('');
                                //alert(tempGuess);
                                var tempGuess2 = currentSet.allPossibleGuessesDaily[todayOffset].split(' ').join('');
                                //alert(tempGuess2);
                                allCountriesGuessed.push(guess);

                                createNewInputAndLabel();

                                currentInput = document.getElementById('guess' + numGuess);

                                //  alert("guess" + (numGuess - 1) + "Label");
                                //alert(numGuess);
                                //alert(label); 

                                label.innerHTML = "❌";

                                fullGuess = '';
                                guess = currentSet.allPossibleGuessesDaily[todayOffset].toLowerCase();
                                fullGuess += guess[0];
                                currentInput.value = fullGuess;

                                //SAVE HERE

                                window.localStorage.setItem('guess', numGuess);  

                                for (let i = 0; i < numGuess; i++)
                                {
                                    window.localStorage.setItem('guess' + i.toString(), allCountriesGuessed[i.toString()]);
                                }
                            }

                            updateSides();
                        }

                        else if (guess == 'skip' && mode == 'endless')  
                        {
                            skipFlag();
                        }

                        else
                        {
                            flagle.innerHTML = 'Invalid';
                        }
                    }
                }

                catch (e)
                {
                    alert('ENEteR: ' + e);  
                }   
            }
        }

        else
        {            
            /* if (event.key == 'Backspace')
            {
                updateSides();
            }*/
            
            if (event.key == ' ' && document.activeElement != document.getElementById('guess' + numGuess))
            {
                document.getElementById('guess' + numGuess).focus();
            }

            else if (event.key == 'Escape')
            {   
                try
                {
                    document.getElementById('overlay').style.visibility = 'hidden';
                    cont.style.visibility = 'visible';

                    if (countryMenu.style.visibility == 'visible')
                    {
                        countryMenu.style.visibility = 'hidden';
                        image.style.visibility = 'visible';
                    }

                    if (settingsMenu.style.visibility == 'visible')
                    {
                        settingsMenu.style.visibility = 'hidden';
                        image.style.visibility = 'visible';
                    }

                    if (document.getElementById('rules').style.visibility == 'visible')
                    {
                        image.style.visibility = 'visible';
                        document.getElementById('rules').style.visibility = 'hidden';
                    }

                    area.style.visibility = 'visible';

                    if (mode == 'daily')
                    {
                        document.getElementById('lastFlag').style.visibility = 'visible';  
                    }
                    
                    currentInput.focus();
                }

                catch (e)
                {
                    alert(e);  
                }
            }

            if (document.getElementById('guess' + numGuess) == document.activeElement)
            {
                if (event.key == 'Backspace')
                {
                    changeFunc(true);
                }

                else
                {      
                    changeFunc(false);  
                }

                fullGuess = currentInput.value;
            }

            else
            {
                if (parseInt(event.key) == 8)
                {
                    for (let i = 0; i < 9; i++)
                    {
                        window.localStorage.setItem('guess' + i.toString(), 'undefined');
                    }
                    window.localStorage.setItem('guess', 0);
                    window.localStorage.setItem('hasGuessedDaily', 'false');
                    window.localStorage.setItem('lastUpdate',(getDOY() - 1).toString());
                }
            }
        }
    });
};