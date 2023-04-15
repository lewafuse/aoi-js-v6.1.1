module.exports = [{
    name: "borsa",
    code: `

$description[1;
\`\`\`fix\n[-----BİRİM-----|-----SATİS-----|-----DURUM-----]\n\`\`\`
\`\`\`hs\n
EURO        |    $jsonRequest[https://api.genelpara.com/embed/para-birimleri.json;EUR.satis]        $if[$checkContains[$jsonRequest[https://api.genelpara.com/embed/para-birimleri.json;EUR.degisim];- ,-];🔻 $jsonRequest[https://api.genelpara.com/embed/para-birimleri.json;EUR.degisim];$replaceText[🔺 $jsonRequest[https://api.genelpara.com/embed/para-birimleri.json;EUR.degisim];🔺 -;🔻 -]]
DOLAR       |    $jsonRequest[https://api.genelpara.com/embed/para-birimleri.json;USD.satis]        $if[$checkContains[$jsonRequest[https://api.genelpara.com/embed/para-birimleri.json;USD.degisim];- ,-];🔻 $jsonRequest[https://api.genelpara.com/embed/para-birimleri.json;USD.degisim];$replaceText[🔺 $jsonRequest[https://api.genelpara.com/embed/para-birimleri.json;USD.degisim];🔺 -;🔻 -]]
STERLIN     |    $jsonRequest[https://api.genelpara.com/embed/para-birimleri.json;GBP.satis]        $if[$checkContains[$jsonRequest[https://api.genelpara.com/embed/para-birimleri.json;GBP.degisim];- ,-];🔻 $jsonRequest[https://api.genelpara.com/embed/para-birimleri.json;GBP.degisim];$replaceText[🔺 $jsonRequest[https://api.genelpara.com/embed/para-birimleri.json;GBP.degisim];🔺 -;🔻 -]]
BIST        |    $jsonRequest[https://api.genelpara.com/embed/para-birimleri.json;XU100.satis]      $if[$checkContains[$jsonRequest[https://api.genelpara.com/embed/para-birimleri.json;XU100.degisim];- ,-];🔻 $jsonRequest[https://api.genelpara.com/embed/para-birimleri.json;XU100.degisim];$replaceText[🔺 $jsonRequest[https://api.genelpara.com/embed/para-birimleri.json;XU100.degisim];🔺 -;🔻 -]]
BITCOIN     |    $jsonRequest[https://api.genelpara.com/embed/para-birimleri.json;BTC.satis]        $if[$checkContains[$jsonRequest[https://api.genelpara.com/embed/para-birimleri.json;BTC.degisim];- ,-];🔻 $jsonRequest[https://api.genelpara.com/embed/para-birimleri.json;BTC.degisim];$replaceText[🔺 $jsonRequest[https://api.genelpara.com/embed/para-birimleri.json;BTC.degisim];🔺 -;🔻 -]]
\n\`\`\`]
$color[1;$getVar[globalcolor]]
$footer[1;Borsa | $username[$authorID];$userAvatar[$authorID]]
$addTimestamp[1]


`},{//yenile
    type: "interaction",
    prototype: "button",
    name: "borsayenile",
    code: `
$interactionUpdate[;{newEmbed:
{footer:Borsa | $username[$authorID]:$authorAvatar}{timestamp}{color:$getVar[globalcolor]}{description:
\`\`\`fix\n[-----BİRİM-----|-----SATİS-----|-----DURUM-----]\n\`\`\`
\`\`\`hs\n
EURO        |    $jsonRequest[https://api.genelpara.com/embed/para-birimleri.json;EUR.satis]        $if[$checkContains[$jsonRequest[https://api.genelpara.com/embed/para-birimleri.json;EUR.degisim];- ,-];🔻 $jsonRequest[https://api.genelpara.com/embed/para-birimleri.json;EUR.degisim];$replaceText[🔺 $jsonRequest[https://api.genelpara.com/embed/para-birimleri.json;EUR.degisim];🔺 -;🔻 -]]
DOLAR       |    $jsonRequest[https://api.genelpara.com/embed/para-birimleri.json;USD.satis]        $if[$checkContains[$jsonRequest[https://api.genelpara.com/embed/para-birimleri.json;USD.degisim];- ,-];🔻 $jsonRequest[https://api.genelpara.com/embed/para-birimleri.json;USD.degisim];$replaceText[🔺 $jsonRequest[https://api.genelpara.com/embed/para-birimleri.json;USD.degisim];🔺 -;🔻 -]]
STERLIN     |    $jsonRequest[https://api.genelpara.com/embed/para-birimleri.json;GBP.satis]        $if[$checkContains[$jsonRequest[https://api.genelpara.com/embed/para-birimleri.json;GBP.degisim];- ,-];🔻 $jsonRequest[https://api.genelpara.com/embed/para-birimleri.json;GBP.degisim];$replaceText[🔺 $jsonRequest[https://api.genelpara.com/embed/para-birimleri.json;GBP.degisim];🔺 -;🔻 -]]
BIST        |    $jsonRequest[https://api.genelpara.com/embed/para-birimleri.json;XU100.satis]      $if[$checkContains[$jsonRequest[https://api.genelpara.com/embed/para-birimleri.json;XU100.degisim];- ,-];🔻 $jsonRequest[https://api.genelpara.com/embed/para-birimleri.json;XU100.degisim];$replaceText[🔺 $jsonRequest[https://api.genelpara.com/embed/para-birimleri.json;XU100.degisim];🔺 -;🔻 -]]
BITCOIN     |    $jsonRequest[https://api.genelpara.com/embed/para-birimleri.json;BTC.satis]        $if[$checkContains[$jsonRequest[https://api.genelpara.com/embed/para-birimleri.json;BTC.degisim];- ,-];🔻 $jsonRequest[https://api.genelpara.com/embed/para-birimleri.json;BTC.degisim];$replaceText[🔺 $jsonRequest[https://api.genelpara.com/embed/para-birimleri.json;BTC.degisim];🔺 -;🔻 -]]
\n\`\`\`};{actionRow:{button:Yenile:secondary:borsayenile:no:<:dark_st_green:1053691832711774339>}}]
`}]