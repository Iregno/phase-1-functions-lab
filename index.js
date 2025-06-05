// Code your solution in this file!

// Function to calculate distance from headquarters (42nd street) in blocks
function distanceFromHqInBlocks(pickupLocation) {
  const hqLocation = 42;
  return Math.abs(pickupLocation - hqLocation);
}

// Function to calculate distance from headquarters in feet
// Each block is 264 feet
function distanceFromHqInFeet(pickupLocation) {
  const blocks = distanceFromHqInBlocks(pickupLocation);
  return blocks * 264;
}

// Function to calculate distance travelled between two points in feet
function distanceTravelledInFeet(start, destination) {
  const blocks = Math.abs(destination - start);
  return blocks * 264;
}

// Function to calculate fare price based on distance
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  
  if (distance <= 400) {
    // First 400 feet are free
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    // 2 cents per foot after the first 400 feet
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    // Flat rate of $25 for distances over 2000 feet
    return 25;
  } else {
    // Cannot travel over 2500 feet
    return 'cannot travel that far';
  }
}
