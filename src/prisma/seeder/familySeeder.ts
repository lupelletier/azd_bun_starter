import { faker } from "@faker-js/faker";
import range from "lodash/range";
import { UniqueEnforcer } from 'enforce-unique'; // Ensures uniqueness of names
import Seeder from "./Seeder";
import UserSeed from "./userSeeder"; // Base class for seeding data

const uniqueEnforcerFamily = new UniqueEnforcer(); // Ensures family names are unique
const uniqueEnforcerCode = new UniqueEnforcer(); // Ensures usernames are unique
class FamilySeed extends Seeder {
  constructor(count = 10) { // Default count is 10
    super(count); // Call parent constructor
    this.createData(); // Generate the data
  }

  createData() {
    this._data = []; // Clear existing data
    range(this.count).forEach(() => {
      const familyName = uniqueEnforcerFamily.enforce(() => {
        return faker.person.lastName(); // Generate a fake last name
      });
      const code = uniqueEnforcerCode.enforce(() => {
        return faker.string.alphanumeric(8); // Generate a random alphanumeric code
      });

      this._data.push({
        name: familyName,
        code: code,
      });
    });
  }
}

export default FamilySeed;
