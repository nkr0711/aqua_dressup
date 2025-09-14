function changeExpression(type) {
  const base = document.getElementById('base');
  base.src = `images/aqua_base_${type}.png`;
}

function changeOutfit(name) {
  const outfit = document.getElementById('outfit');
  outfit.src = name ? `images/aqua_${name}.png` : '';
}

function changeAccessory(name) {
  const accessory = document.getElementById('accessory');
  accessory.src = name ? `images/aqua_accessory_${name}.png` : '';
}

function changeBg_Accessory(name) {
  const bg_accessory = document.getElementById('bg_accessory');
  bg_accessory.src = name ? `images/bg_ac_${name}.png` : '';
}

function changeBackground(name) {
  const bg = document.getElementById('background');
  bg.style.backgroundImage = name ? `url('images/bg_${name}.jpg')` : 'none';
}

