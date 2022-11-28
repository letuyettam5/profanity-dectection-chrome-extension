<<<<<<< HEAD
check(document.body);//this line runs the function

//this alters the document's body by running check() function
document.body.addEventListener('DOMSubtreeModified', function () {
   check(document.body);
});

function check(node)
{
	var child; //variable to manipulate document fragment's child
    var next;

	switch ( node.nodeType )
	{
		case Node.ELEMENT_NODE:
		case Node.DOCUMENT_NODE:
		case Node.DOCUMENT_FRAGMENT_NODE:
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				check(child);
				child = next;
			}
			break;

		case Node.TEXT_NODE:
			handleText(node);
			break;
	}
}

var badWords = ["asshole","bint","bitch","bollocks","bullshit","feck","munter","pissed"
,"shit","son of a bitch","tits","nigga", "chink", "redneck", "gypsy", "redskin",
"whore", "slut", "hoe","fuck","bastard","dick","dickhead","pussy"];

function handleText(textNode)
{
	var v = textNode.nodeValue;
    v = v.replace(/\bBitch\b/g, "CENSORED");
    // for (var i = 0; i < badWords.length; i++) {
    //     if (v.toLowercase().indexOf(badWords[i]) != -1) {
    //         v = "CENSORED";
    //         //v.innerHTML.style = "color: #CE0D00; font-weight: bold";
    //     }
    // }
	
	textNode.nodeValue = v;
=======
check(document.body);//this line runs the function

//this alters the document's body by running check() function
document.body.addEventListener('DOMSubtreeModified', function () {
   check(document.body);
});

function check(node)
{
	var child; //variable to manipulate document fragment's child
    var next;

	switch ( node.nodeType )
	{
		case Node.ELEMENT_NODE:
		case Node.DOCUMENT_NODE:
		case Node.DOCUMENT_FRAGMENT_NODE:
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				check(child);
				child = next;
			}
			break;

		case Node.TEXT_NODE:
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;
	v = v.replace(/\bArse\b/g, "CENSORED");
	v = v.replace(/\bBloody\b/g, "CENSORED");
	v = v.replace(/\bBugger\b/g, "CENSORED");
	v = v.replace(/\bCow\b/g, "CENSORED");
	v = v.replace(/\bCrap\b/g, "CENSORED");
	v = v.replace(/\bDamn\b/g, "CENSORED");
	
	textNode.nodeValue = v;
>>>>>>> ba10408 (stuffs)
}