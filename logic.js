const isInitial = (name) => /^[A-Z]\.$/.test(name);
const isExpanded = (name) => /^[A-Z][a-z]+$/.test(name);

const validTwoName = ([firstName, lastName]) => {
  return (
    (isInitial(firstName) || isExpanded(firstName)) && isExpanded(lastName)
  );
};

const validThreeName = ([firstName, middleName, lastName]) => {
  return (
    (isInitial(firstName) || isExpanded(firstName)) &&
    (isInitial(middleName) ||
      (!isInitial(firstName) && isExpanded(middleName))) &&
    isExpanded(lastName)
  );
};

const validName = (name) => {
  const nameArr = name.split(" ");
  if (nameArr.length < 2 || nameArr.length > 3) return false;
  return nameArr.length === 2 ? validTwoName(nameArr) : validThreeName(nameArr);
};

const findDisappeared = (nums) => {
  if (nums.length === 0 || nums.length > 105) return [];
  const result = [];
  const numsSet = new Set(nums);
  for (let i = 1; i <= nums.length; i++) {
    if (!numsSet.has(i)) result.push(i);
  }
  return result;
};