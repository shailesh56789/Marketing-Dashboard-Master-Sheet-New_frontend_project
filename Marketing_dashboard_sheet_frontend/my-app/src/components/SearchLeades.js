import "./SearchLeades.css"; 
export default function  SearchLeades({searchText,onSearchNotes,onClearNotes})
{
 return(
    
    <div className="search-box" >
      <input style={{}}
        type="input" value={searchText}
        placeholder="Search Notes" onChange={onSearchNotes}/>
        {searchText !=="" && <button style={{ }} type="reset" onClick={onClearNotes}>X</button>}

    </div>
 );
}