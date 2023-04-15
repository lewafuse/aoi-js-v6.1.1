module.exports = {
    name: "avatar",
    $if: "v4",
    code: `
$author[1;$username[$mentioned[1]] Avatarı;$userAvatar[$mentioned[1];;2048;true;png]]
$description[1;> **İndirme Seçenekleri**
**$replaceText[$replaceText[$checkContains[$userAvatar[$mentioned[1];;2048;true;gif];gif];true;[GIF]($userAvatar[$mentioned[1];;2048;true;png] 'click')];false;[PNG]($userAvatar[$mentioned[1];;2048;true;jpeg] 'click') | [JPEG]($userAvatar[$mentioned[1];;2048;true;wepb] 'click') | [WEBP]($userAvatar[$mentioned[1];;2048;true;png] 'click')]**
]
$color[1;$randomText[5f6eff;5fff7f;ff5f5f;d65cf5;8e5cf5;5cddf5;e8f55c;ff9000]]
$image[1;$userAvatar[$mentioned[1];;2048;true;png]]

    `}