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

## Controls

| Key     | Action           |
| ------- | ---------------- |
| W A S D | Move             |
| E       | Pick Up / Place  |
| F       | Use Station      |
| R       | Open Recipe Menu |
| ESC     | Pause            |

## Screenshots

<img width="1919" height="914" alt="image" src="https://github.com/user-attachments/assets/e08dd6ee-cc1a-4ee6-88d4-761e8748c7db" />

---

<img width="1918" height="916" alt="image" src="https://github.com/user-attachments/assets/b1235d65-86d1-4035-90cd-327ddf1bd121" />

---

<img width="1919" height="916" alt="image" src="https://github.com/user-attachments/assets/eb9189fc-f2cf-4d8d-9af2-e5f5cecf6005" />


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
