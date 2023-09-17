
const tween1 = KUTE.to('#blob1', { path: '#blob2' }, { repeat: 1, duration: 2000, yoyo: true }).start();
const tween2 = KUTE.to('#blob1', { path: '#blob3' }, { repeat: 1, duration: 2000, yoyo: true });
const tween3 = KUTE.to('#blob1', { path: '#blob4' }, { repeat: 1, duration: 2000, yoyo: true });

// Create a chain of animations
tween1.chain(tween2);
tween2.chain(tween3);
tween3.chain(tween1);

