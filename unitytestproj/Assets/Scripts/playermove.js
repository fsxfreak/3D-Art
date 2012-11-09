
public var nPublic : int = 0;
private var nPrivate : int = 0;

function Awake () {
	print ("In function: Awake()");
}

function Start () {
	print ("In function: Start()");
}

function Update () {
	if (Input.GetKeyDown(KeyCode.Space)) {
		print ("Space is pressed down" + nPublic);
		nPublic++;
	}
}

function OnTriggerEnter (theGameObject:Collider) {
	print ("Something is inside the collider");
	nPrivate++;
	
	if (theGameObject.tag == "Player") {
		print ("Collision detected" + nPrivate);
	}
}