/* generated by pull.js */
const manifest = {
  "editorOnly": true,
  "noTranslations": true,
  "name": "Auto-hiding block palette",
  "description": "Hides the block palette if not hovered. Click the lock icon to lock it in place temporarily. Alternatively, use \"category click\" mode.",
  "credits": [
    {
      "name": "TheColaber",
      "link": "https://scratch.mit.edu/users/TheColaber"
    }
  ],
  "info": [
    {
      "type": "notice",
      "text": "\"Palette area hover\" mode only extends the viewing area. If you want to be able to drag blocks into that area without them getting trashed, use one of the other modes.",
      "id": "hoverExplanation"
    }
  ],
  "userscripts": [
    {
      "url": "userscript.js"
    }
  ],
  "userstyles": [
    {
      "url": "style.css"
    }
  ],
  "settings": [
    {
      "name": "Toggle on...",
      "id": "toggle",
      "type": "select",
      "potentialValues": [
        {
          "id": "hover",
          "name": "Palette area hover"
        },
        {
          "id": "cathover",
          "name": "Category hover"
        },
        {
          "id": "category",
          "name": "Category click"
        }
      ],
      "default": "hover"
    },
    {
      "dynamic": true,
      "name": "Animation duration",
      "id": "speed",
      "type": "select",
      "potentialValues": [
        {
          "id": "none",
          "name": "None"
        },
        {
          "id": "short",
          "name": "Short"
        },
        {
          "id": "default",
          "name": "Default"
        },
        {
          "id": "long",
          "name": "Long"
        }
      ],
      "default": "default"
    }
  ],
  "tags": [
    "recommended"
  ]
};
export default manifest;
