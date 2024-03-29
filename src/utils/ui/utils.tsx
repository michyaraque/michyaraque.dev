export const slugToHex = (stringInput: any) => {
  let stringUniqueHash = [...stringInput].reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc);
  }, 0);
  return `hsl(${stringUniqueHash % 360}, 95%, 35%)`;
}

export const styledDate = (date: string) => {
  return new Intl.DateTimeFormat('es-ES', {
    dateStyle: "long"
  }).format(new Date(date));
}

export const wrap = (data: string, ...extraContent: any) => {
  return data.replace(/\n/g, ' ') + ' ' + extraContent;
}

export const readingTimeToSpanish = (time: string) => {
  let readingTimeValue = time.split(' min read')[0];
  const plural = Number(readingTimeValue) > 1 ? 's' : '';
  return readingTimeValue + ` min${plural} de lectura`;
}

export const removeAccent = (stringInput: string) => {
  return stringInput.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

export const cleanSlug = (stringInput: string) => {
  const replacer = new RegExp('-', 'g');
  return stringInput.charAt(0).toUpperCase() + stringInput.toLowerCase().slice(1).replace(replacer, " ")
}

export const cleanText = (stringInput: string) => {

  if(stringInput && stringInput.includes('_configuration')) return;

  return stringInput.normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(new RegExp(' ', 'g'), "_")
    .replace(/[^\w]/g, '')
}

export const groupBy = <T,>(data: Array<T>, filter: string) => {
  let objectGrouped: Array<unknown | any> = []
  data.forEach((item: any) => {
    if (!objectGrouped.hasOwnProperty(item[filter])) {
      objectGrouped[item[filter]] = []
    }

    objectGrouped[item[filter]].push({ ...item })

  })
  return objectGrouped;
}
