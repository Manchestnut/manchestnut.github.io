const waifuDisplay = document.getElementById('waifu-display');
const source = document.getElementById('source');
const waifuButton = document.getElementById('waifu-button');

const tags = [
    "maid",
    "waifu",
    "marin-kitagawa",
    "mori-calliope",
    "raiden-shogun",
    "oppai",
    "selfies",
    "uniform",
    "kamisato-ayaka"
]

const randomTagIndex = () => {
    return Math.floor(Math.random() * tags.length)
}

async function getWaifu() {
    const apiUrl = 'https://api.waifu.im/search';
    const params = {
        included_tags: tags[randomTagIndex()]
      };

      const queryParams = new URLSearchParams();

      for (const key in params) {
        if (Array.isArray(params[key])) {
          params[key].forEach(value => {
            queryParams.append(key, value);
          });
        } else {
          queryParams.set(key, params[key]);
        }
      }
      const requestUrl = `${apiUrl}?${queryParams.toString()}`;

      try {
        const response = await fetch(requestUrl);
        if(!response.ok) {
            throw new Error(response.status);
        }
        const data = await response.json();
        waifuDisplay.innerHTML = `<img id='waifu-image' src=${data.images[0].url}>`
        source.innerHTML = `<a href=${data.images[0].source} target='_blank' rel='noreferrer noopener'>Source</a>`
      }
      catch(error) {
        console.error(error)
        console.log(params.included_tags)
        waifuDisplay.innerHTML = "<p class='warning'>No waifu available for you. Please try again.</p>"
      }
}

function getWaifuMain() {
    waifuButton.addEventListener('click', getWaifu)
}

export default getWaifuMain