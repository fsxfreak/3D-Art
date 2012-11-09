public var playerLight : GameObject;
public var lampIcon : GUITexture;

public var crosshairs : GUITexture;
public var sackIcon : GUITexture;

public var keyIcon : GUITexture;

function OnTriggerEnter(theGameObject:Collider) {

	if (gameObject.name == "lampLightPickupPrefab") {
		lampIcon.enabled = true;
		playerLight.SetActiveRecursively(true);
		Destroy(gameObject);
	}
	else if (gameObject.name == "rockPickup") {
		crosshairs.enabled = true;
		sackIcon.enabled = true;
		//sackofrocks.SetActiveRecursively(true);
		Destroy(gameObject);
	}
	else if (gameObject.name == "keyPickup") { 
		keyIcon.enabled = true;
		Destroy(gameObject);
	}
	
}