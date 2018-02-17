module scenes {
  export class PlayScene extends objects.Scene {
    // Private Instance Variables
    private _ocean: objects.Ocean;
    private _plane: objects.Plane;
    private _island: objects.Island;

    // Public Properties

    // Constructor
    constructor(assetManager: createjs.LoadQueue) {
      super(assetManager);

      this.Start();
    }

    // Private Mathods



    // Public Methods

    // Initialize Game Variables and objects
    public Start(): void {
      this._ocean = new objects.Ocean(this.assetManager);
      this._plane = new objects.Plane(this.assetManager);
      this._island = new objects.Island(this.assetManager);
      this.Main();
    }

    public Update(): void {
      this._ocean.Update();
      this._plane.Update();
      this._island.Update();
    }

    // This is where the fun happens
    public Main(): void {
      // add ocean to the scene
      this.addChild(this._ocean);

      // add island to this scene
      this.addChild(this._island);

      // add plane to this scene
      this.addChild(this._plane);

    }
  }
}
