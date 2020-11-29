majorSpacing = [0,4,7,12,16,19]
minorSpacing = [0,3,7,12,15,19]
majorSpacing = [0,4,7,12,16,19]
majorScale = [0,2,4,5,7,9,11,12]
minorScale = [0,2,3,5,7,8,10,12]
var majorMinor
var lowerCaseMaMi
var maMiThird
var scaleString
var spacingArray = []
var noteScale = []
var currentScale =[]
var currentScaleOct =[]
var newArr =[]
// var notes= ["c", "cs", "d", "ds", "e", "f", "fs", "g", "gs", "a", "as", "b"]
var notesForLookup = ["C", "CD", "D", "DE", "E", "F", "FG", "G", "GA", "A", "AB", "B"]
// var scale= [[0,2,4,5,7,9,11,"Ionian"],[0,2,3,5,7,9,10,"Dorian"],[0,1,3,5,7,8,10,"Phrygian"],[0,2,4,6,7,9,11,"Lydian"],[0,2,4,5,7,9,10,"Mixolydian"],[0,2,3,5,7,9,10,"Aeolian"],[0,1,3,5,6,8,10,"Locrian"],[0,1,3,4,6,8,9,11,"Diminished"]]
var scaleEdit=[[0,2,4,5,7,9,11,0],[0,2,3,5,7,9,10,1],[0,1,3,5,7,8,10,2],[0,2,4,6,7,9,11,3],[0,2,4,5,7,9,10,4],[0,2,3,5,7,8,10,5],[0,1,3,5,6,8,10,6],[0,1,3,4,6,8,9,11,7],[0,2,4,7,9,8],[0,3,5,7,10,9],[0,3,4,5,7,10,10]]
var listOfScaleTypes = ["Ionian(Maj)","Dorian","Phrygian","Lydian","Mixolydian","Aeolian(Min)","Locrian","Dim","Maj Pent","Min Pent","Blues"]
var noteFreq=[]
var arrayOfNotes=[]
var time = .15