function testNoteListModel(){
  var testNoteList = new NoteList();
  testNoteList.addNote("My favourite language is JavaScript");
  if(testNoteList.returnNotes() != "XMy favourite language is JavaScript"){
    throw new Error ("Note is not there");
  } else {
    console.log("Success : " + testNoteList.returnNotes)
  }
}

testNoteListModel();
