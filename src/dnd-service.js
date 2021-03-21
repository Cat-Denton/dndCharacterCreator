export default class DndService {
  static async getAbilities() {
    try {
      const response = await fetch(`https://www.dnd5eapi.co/api/ability-scores/`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch (error) {
      return error.message;
    }
  }
  static async getAbilityInfo(ability) {
    try {
      const response = await fetch(`https://www.dnd5eapi.co/api/ability-scores/${ability}`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch (error) {
      return error.message;
    }
  }
}