import Team from '../team';

const mockCharacter = (id, name) => {
    return {
        id,
        name
    };
};

test('Team.add() должна добавить нового персонажа', () => {
    const team = new Team();
    const character = mockCharacter(1, 'Warrior');
    
    team.add(character);
    expect(team.members.has(character)).toBe(true);
});

test('Team.add() должна выбросить ошибку при попытке добавить уже существующего персонажа', () => {
    const team = new Team();
    const character = mockCharacter(1, 'Warrior');

    team.add(character);
    expect(() => team.add(character)).toThrow();
});

test('Team.addAll() должна добавить несколько персонажей', () => {
    const team = new Team();
    const character = mockCharacter(1, 'Warrior');
    const character2 = mockCharacter(2, 'Mage');
    const character3 = mockCharacter(3, 'Rogue');

    expect(() => team.addAll(character, character2, character3)).not.toThrow();
    expect(team.members.size).toBe(3);
});

test ('Team.addAll() должна добавить персонажей, часть которых уже есть в команде и не выбросить ошибку', () => {
    const team = new Team();
    const character = mockCharacter(1, 'Warrior');
    const character2 = mockCharacter(2, 'Mage');
    const character3 = mockCharacter(3, 'Rogue');

    team.add(character);

    expect(() => team.addAll(character, character2, character3)).not.toThrow();
    expect(team.members.size).toBe(3);
});

test( 'Team.toArray() должна вернуть массив персонажей', () => {
    const team = new Team();
    const character = mockCharacter(1, 'Warrior');
    const character2 = mockCharacter(2, 'Mage');
    const character3 = mockCharacter(3, 'Rogue');

    team.addAll(character, character2, character3);

    const result = [character, character2, character3];
    expect(team.toArray()).toEqual(result);
});
