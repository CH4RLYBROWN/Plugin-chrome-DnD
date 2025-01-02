let ID_PLAYER;

const setIdPlayer = (value) => (ID_PLAYER = value);
const getIdPlayer = () => ID_PLAYER;

window.setIdPlayer = setIdPlayer;
window.getIdPlayer = getIdPlayer;

let NAME_PLAYER;

const setNamePlayer = (value) => (NAME_PLAYER = value);
const getNamePlayer = () => NAME_PLAYER;

window.setNamePlayer = setNamePlayer;
window.getNamePlayer = getNamePlayer;

let MAX_HP;

const setMaxHp = (value) => (MAX_HP = value);
const getMaxHp = () => MAX_HP;

window.setMaxHp = setMaxHp;
window.getMaxHp = getMaxHp;

let CURRENT_HP;

const setCurrentHp = (value) => (CURRENT_HP = value);
const getCurrentHp = () => CURRENT_HP;

window.setCurrentHp = setCurrentHp;
window.getCurrentHp = getCurrentHp;

let URL_ICON_PLAYER;

const setUrlIconPlayer = (value) => (URL_ICON_PLAYER = value);
const getUrlIconPlayer = () => URL_ICON_PLAYER;

window.setUrlIconPlayer = setUrlIconPlayer;
window.getUrlIconPlayer = getUrlIconPlayer;

let PROFILE_IS_VISIBLE = false;

const setProfileVisible = (value) => (PROFILE_IS_VISIBLE = value);
const isProfileVisible = () => PROFILE_IS_VISIBLE;

window.setProfileVisible = setProfileVisible;
window.isProfileVisible = isProfileVisible;

let CHAT_INPUT;

const setChatInput = (value) => (CHAT_INPUT = value);
const getChatInput = () => CHAT_INPUT;

window.setChatInput = setChatInput;
window.getChatInput = getChatInput;

let FAKE_ENTER_PRESS;

const setFakeEnterPress = (value) => (FAKE_ENTER_PRESS = value);
const getFakeEnterPress = () => FAKE_ENTER_PRESS;

window.setFakeEnterPress = setFakeEnterPress;
window.getFakeEnterPress = getFakeEnterPress;

let IS_PRIVATE = false;

const setIsPrivate = (value) => (IS_PRIVATE = value);
const getIsPrivate = () => IS_PRIVATE;

window.setIsPrivate = setIsPrivate;
window.getIsPrivate = getIsPrivate;

const AVANTAGES_STATES = ["normal", "avantage", "desavantage"];
const getAvantageStates = () => AVANTAGES_STATES;
window.getAvantageStates = getAvantageStates;

let HAS_AVANTAGE;

const setHasAvantage = (value) => (HAS_AVANTAGE = value);
const getHasAvantage = () => HAS_AVANTAGE;

window.setHasAvantage = setHasAvantage;
window.getHasAvantage = getHasAvantage;

let PLAYER_LIST = [];

const setPlayerList = (value) => {
  PLAYER_LIST = value;
};

const getPlayerList = () => {
  return PLAYER_LIST;
};

window.setPlayerList = setPlayerList;
window.getPlayerList = getPlayerList;

let TOTAL_WEIGHT;

const setTotalWeight = (value) => (TOTAL_WEIGHT = value);
const getTotalWeight = () => TOTAL_WEIGHT;

window.setTotalWeight = setTotalWeight;
window.getTotalWeight = getTotalWeight;


// FICHE PERSONNAGE //

let STRENGTH_MODIFIER;
let DEXTERITY_MODIFIER;
let CONSTITUTION_MODIFIER;
let INTELLIGENCE_MODIFIER;
let WISDOM_MODIFIER;
let CHARISMA_MODIFIER;

const setStrengthModifier = (value) => (STRENGTH_MODIFIER = value);
const getStrengthModifier = () => STRENGTH_MODIFIER;

const setDexterityModifier = (value) => (DEXTERITY_MODIFIER = value);
const getDexterityModifier = () => DEXTERITY_MODIFIER;

const setConstitutionModifier = (value) => (CONSTITUTION_MODIFIER = value);
const getConstitutionModifier = () => CONSTITUTION_MODIFIER;

const setIntelligenceModifier = (value) => (INTELLIGENCE_MODIFIER = value);
const getIntelligenceModifier = () => INTELLIGENCE_MODIFIER;

const setWisdomModifier = (value) => (WISDOM_MODIFIER = value);
const getWisdomModifier = () => WISDOM_MODIFIER;

const setCharismaModifier = (value) => (CHARISMA_MODIFIER = value);
const getCharismaModifier = () => CHARISMA_MODIFIER;

// Exposer les setters et getters à l'objet window
window.setStrengthModifier = setStrengthModifier;
window.getStrengthModifier = getStrengthModifier;

window.setDexterityModifier = setDexterityModifier;
window.getDexterityModifier = getDexterityModifier;

window.setConstitutionModifier = setConstitutionModifier;
window.getConstitutionModifier = getConstitutionModifier;

window.setIntelligenceModifier = setIntelligenceModifier;
window.getIntelligenceModifier = getIntelligenceModifier;

window.setWisdomModifier = setWisdomModifier;
window.getWisdomModifier = getWisdomModifier;

window.setCharismaModifier = setCharismaModifier;
window.getCharismaModifier = getCharismaModifier;
