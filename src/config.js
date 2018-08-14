import directions from './directions';

export const canvasWidth = 800;
export const canvasHeight = 600;
export const tileWidth = 100;
export const tileHeight = 100;
export const mapWidth = 20;
export const mapHeight = 20;
export const lightGreen = '#75a042';
export const darkGreen = '#365b1d';
export const lightBlue = '#52638a';
export const darkBlue = '#2b3653';
export const maxMapXs = tileWidth * mapWidth - canvasWidth;
export const maxMapYs = tileHeight * mapHeight - canvasHeight;
export const mapPaddingX = 4;
export const mapPaddingY = 3;
export const startX = 4;
export const startY = 5;
export const startDirection = directions.N;
