export default function filterLeades(notes,searchText)
{
   if(!searchText) 
     return notes;
   else{
    const result=notes.filter((note)=>
    note.id?.toLowerCase().includes(searchText.toLowerCase())||
    note.marketingName?.toLowerCase().includes(searchText.toLowerCase()) ||
    note.marketingEmail?.toLowerCase().includes(searchText.toLowerCase()) ||
    note.marketingMobileNo?.includes(searchText.toLowerCase()));
    return result;
   }
}
/*
export default function filterLeads(notes, searchText) {
  if (!searchText) return notes;

  const text = searchText.toLowerCase();

  return notes.filter((note) =>
    [
      note.id,
      note.marketingName,
      note.marketingEmail,
      note.marketingMobileNo
    ]
      .filter(Boolean)
      .some((field) =>
        field.toString().toLowerCase().includes(text)
      )
  );
}

*/