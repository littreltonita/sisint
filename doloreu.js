function removePathFromField(path, field) {
  const pathParts = path.split('/');
  const fieldParts = field.split('.');
  
  let result = field;
  
  for (let i = 0; i < pathParts.length; i++) {
    const part = pathParts[i];
    for (let j = 0; j < fieldParts.length; j++) {
      if (fieldParts[j] === part) {
        fieldParts.splice(j, 1);
        j--;
      }
    }
  }
  
  result = fieldParts.join('.');
  return result;
}
