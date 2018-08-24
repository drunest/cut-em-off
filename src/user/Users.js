import { createUser, INFECTED } from '.';
import { mapHeight, mapWidth, mapPaddingX, mapPaddingY } from '../config';
import { multiCollides } from '../utils';
import { allInfected } from './utils';
import { GAME_OVER } from '../pubsub';

export default class {
    constructor(map, pubsub) {
        this.map = map;
        this.pubsub = pubsub;
        this.users = [];
        this.gameOver = false;
        for (let row = 1; row <= mapHeight + mapPaddingY * 2; row++) {
            for (let col = 1; col <= mapWidth + mapPaddingX * 2; col++) {
                const tile = map.tileAtLayer('main', { row, col });
                if (tile >= 17 && tile <= 20) {
                    this.users.push(createUser({ map, row: row - mapPaddingY + 1, col: col - mapPaddingX + 1 }));
                }
            }
        }
        this.pubsub.subscribe(GAME_OVER, () => (this.gameOver = true));
    }
    update() {
        this.users.forEach(user => user.update());
    }
    render() {
        this.users.forEach(user => user.render());
    }
    infect(viruses, messageBox) {
        const { users, pubsub, gameOver } = this;
        const userVirusCollisions = multiCollides(users, viruses).filter(([user]) => user.status !== INFECTED);
        if (userVirusCollisions.length === 0) {
            return;
        }
        userVirusCollisions.forEach(([user]) => user.infect());
        if (gameOver) {
            return;
        }
        if (allInfected(users)) {
            messageBox.show('all users infected<br>game over');
            pubsub.publish(GAME_OVER);
            return;
        }
        messageBox.flash('user infected!');
    }
}