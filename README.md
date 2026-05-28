# Over Brewed

A fast-paced 2D potion brewing game built with JavaScript and HTML5 Canvas.

Players must prepare magical potions under pressure by gathering ingredients, processing them correctly, brewing recipes, bottling potions, and delivering orders before time runs out. As the game progresses, the heat level rises, increasing difficulty and accelerating gameplay intensity.

## Gameplay

In **Over Brewed**, players manage a chaotic potion brewing station inspired by classic cooking games.

The gameplay loop includes:

1. Collecting ingredients and potion bases
2. Processing ingredients through cutting and crushing stations
3. Brewing ingredients inside cauldrons
4. Bottling finished potions
5. Delivering correct orders before timers expire
6. Managing rising difficulty through the heat system

Incorrect brews, overbrewed potions, and failed deliveries cost the player valuable lives.

## Features

### Core Gameplay Systems

- Ingredient processing system
- Brewing and overbrewing mechanics
- Potion recipe system using bitmask combinations
- Dynamic order generation
- Delivery validation system
- Lives and game over system
- Heat progression system
- Adaptive gameplay difficulty and music

### Audio

- Dynamic soundtrack system
- Heat-based music transitions
- Context-sensitive sound effects

### Architecture

- Event-driven systems using a custom event bus
- State-based game flow management
- Separated gameplay logic and rendering systems
- Responsive canvas scaling

### Event System

The project uses a lightweight custom event system to decouple gameplay systems from audio and UI systems.

Example:

```js
emit("new_order");
```

Listeners can react independently:

```js
on("new_order", () => {
  playSound("newOrder");
});
```

This architecture keeps gameplay logic modular and scalable.

## Controls

| Key     | Action           |
| ------- | ---------------- |
| W A S D | Move             |
| E       | Pick Up / Place  |
| F       | Use Station      |
| R       | Open Recipe Menu |
| ESC     | Pause            |

## Running the Project

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm start
```

### Build production version

```bash
npm run build
```

## Future Plans

- Tutorial level
- Visual effects and particles
- Leaderboard
- Upgrades and Specialization

## Contributors

### Programming and Systems

- [Soren Mohammadinia](https://github.com/JavedanCode)
- [Majid Shahani](https://github.com/Majid-Shahani)

### Art and Animation

- Artemis Mohammadinia
- [Sepehr Seddighi](https://sepehrseddighi.github.io/)

## License

MIT License
