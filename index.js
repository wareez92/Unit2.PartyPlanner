const version = "2401_FTB-MT_WEB_PT";
const APIURL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${version}/events`;
const parties = [];

// Section

const fetchParties = async () => {
  try {
    const response = await fetch(APIURL);
    const data = await response.json();
    parties.push(...data.data);
    console.log(parties);
  } catch (error) {
    console.error(error);
  }
};

// Section

const render = async () => {
  const partyList = document.getElementById("partyList");
  await fetchParties();

  const partyItems = parties.map((party) => {
    const partyItem = document.createElement("section");

    partyItem.innerHTML = `<h3>${party.name}</h3>
                            <p>${party.location}</p> 
                            <p>${party.date}</p>
                            <button class="delete-party">Delete</button>`;
    return partyItem;
  });
  partyList.replaceChildren(...partyItems);
};

render();
