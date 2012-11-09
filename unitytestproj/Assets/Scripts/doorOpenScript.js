public var door : GameObject;
public var doorSound : GameObject;

function OnTriggerEnter(theGameObject : Collider) {
	door.animation.Play();
	doorSound.audio.Play();
}
