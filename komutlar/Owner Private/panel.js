module.exports = [{
    name:"panel",
    $if: "v4",
    code:`

$if[$authorID==$botOwnerID]
$author[1;Admin Panel | $username[$clientID];$userAvatar[$clientID]]

$addFields[1;Bot Adı / ID:\`\`\`hs\n $userTag[$clientID] / $clientID \n\`\`\`:yes;
Bot Ping:\`\`\`hs\n $pingMs \n\`\`\`:yes;
Database Ping:\`\`\`hs\n $dbPingMs \n\`\`\`:yes;
Sunucu Sayısı:\`\`\`hs\n $numberSeparator[$serverCount] \n\`\`\`:yes;
Kullanıcı Sayısı:\`\`\`hs\n $numberSeparator[$allMembersCount] \n\`\`\`:yes;
Shard:\`\`\`hs\n $shardID \n\`\`\`:yes;
Komut Sayısı:\`\`\`hs\n $commandsCount \n\`\`\`:yes;
Değer Sayısı:\`\`\`hs\n $variablesCount \n\`\`\`:yes;
> Bot Modları:**Bakım |** \`$replaceText[$replaceText[$getVar[bakım];açık;Aktif];kapalı;Devre Dışı]\`:no;
> Sistem Bilgileri:**Eklendim Log |** <#$getVar[eklendimlog]>\n**Atıldım Log |** <#$getVar[çıkarıldımlog]>:no]


$addButton[1;Yenile;secondary;yenile;no;<a:dark_loading:1044662475381026966>]
$addButton[1;Bakım;primary;bakım;no;<:dark_settings:1033866564321153044>]

$else
<:dark_approveddis:1033866535816663102> <@$authorID> Dostum Bu Komutu Sadece **Bot Yetkilileri** Kullanabilir!
$deleteIn[3s]
$endif
`},{//yenile
    type: "interaction",
    prototype: "button",
    name: "yenile",
    $if: "v4",
    code: `
$if[$authorID==$botOwnerID]
$interactionUpdate[;{newEmbed:{author:Admin Panel | $username[$clientID]:$userAvatar[$clientID]}{footer:Sadece Bot Sahibi / Yetkilileri Kullanabilir.:$userAvatar[$clientID]}
{timestamp}{color:$getVar[globalcolor]}{thumbnail:$userAvatar[$clientID]}
{field:Bot Adı / ID:\`\`\`hs\n $userTag[$clientID] / $clientID \n\`\`\`:no}
{field:Bot Ping:\`\`\`hs\n $pingMs \n\`\`\`:yes}
{field:Database Ping:\`\`\`hs\n $dbPingMs \n\`\`\`:yes}
{field:Sunucu Sayısı:\`\`\`hs\n $numberSeparator[$serverCount] \n\`\`\`:yes}
{field:Kullanıcı Sayısı:\`\`\`hs\n $numberSeparator[$allMembersCount] \n\`\`\`:yes}
{field:Shard:\`\`\`hs\n $shardID \n\`\`\`:yes}
{field:Komut Sayısı:\`\`\`hs\n $commandsCount \n\`\`\`:yes}
{field:Değer Sayısı:\`\`\`hs\n $variablesCount \n\`\`\`:yes}
{field:> Bot Modları:**Bakım |** \`$replaceText[$replaceText[$getVar[bakım];açık;Aktif];kapalı;Devre Dışı]\`:no}
{field:> Sistem Bilgileri:**Eklendim Log |** <#$getVar[eklendimlog]>\n**Atıldım Log |** <#$getVar[çıkarıldımlog]>:no}
;{actionRow:{button:Bakım:primary:bakım:no:<:dark_settings:1033866564321153044>}{button:Yenile:secondary:yenile:no:<a:dark_loading:1044662475381026966>}};;everyone;yes]
$else
$interactionReply[;{newEmbed:{description:<:dark_approveddis:1033866535816663102> Dostum Bu Komutu Sadece **Bot Yetkilileri** Kullanabilir!}{color:RED};;;everyone;yes]
$endif

`},{//bakım
    type: "interaction",
    prototype: "button",
    name: "bakım",
    $if: "v4",
    code: `
$if[$authorID==$botOwnerID]
$if[$getVar[bakım]==açık]

$setVar[bakım;kapalı]
$interactionReply[;{newEmbed:{description:<:dark_st_red:1033866571292102696> Bakım Modu Başarıyla **De-Aktif** Hale Getirildi.}{color:RED};;;everyone;yes]

$else

$setVar[bakım;açık]
$interactionReply[;{newEmbed:{description:<:dark_st_green:1033866569832476733> Bakım Modu Başarıyla **Aktif** Hale Getirildi.}{color:RED};;;everyone;yes]
$endif

$else
$interactionReply[;{newEmbed:{description:<:dark_approveddis:1033866535816663102> Dostum Bu Komutu Sadece **Bot Yetkilileri** Kullanabilir!}{color:RED};;;everyone;yes]
$endif

`}]