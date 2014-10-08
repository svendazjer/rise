//  CodePen Evaluation License
//
//  Copyright (c) 2013 Famous Industries, Inc.
//
//  Non-sublicensable permission is hereby granted, free of charge, to any person obtaining a
//  copy of this software and associated documentation files directly from codepen.io (the
//  "Software"), solely to internally make and internally use copies of the Software to test,
//  explore, and evaluate the Software solely in such personâ€™s non-commercial, non-
//  production environments, provided that the above copyright notice and this permission
//  notice shall be included in all copies or substantial portions of the Software.
//
//  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
//  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
//  MERCHANTABILITY, FITNESS FOR A ARTICULAR PURPOSE AND
//  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
//  HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
//  IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
//  IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
//  SOFTWARE.
//


Famous(function(require,exports,module)
{
    // Registries
    var RegisterEasing      = require('famous-animation/RegisterEasing');
    var Transitionable      = require('famous/Transitionable');
    // Wall Transition
    var WallTransition      = require('famous-physics/utils/WallTransition');
    Transitionable.registerMethod('wall', WallTransition);
    // Spring Transition
    var SpringTransition    = require('famous-physics/utils/SpringTransition');
    Transitionable.registerMethod('spring', SpringTransition);
    var FastClick           = require('famous-sync/FastClick');
    var Engine              = require('famous/Engine');
    var SceneController     = require('app/SceneController');

    // DATA
    var RiseData            = require('app/data/RiseData');

    // Scenes
    var HomeScene           = require('app/scenes/HomeScene');
    var AlarmScene          = require('app/scenes/AlarmScene');
    var NewAlarmScene       = require('app/scenes/NewAlarmScene');
    var TimeScene           = require('app/scenes/TimeScene');
    var AlarmRinger         = require('app/widgets/AlarmRinger');

    var mainCtx = Engine.createContext();
    mainCtx.setPerspective( 1000 );

    mainCtx.add( SceneController );

    SceneController.addScenes({
        'Home'     : HomeScene,         //Tim
        'Alarm'    : AlarmScene,        //Reza
        'NewAlarm' : NewAlarmScene,     //Tim
        'Time'     : TimeScene          //Reza
    });

    SceneController.setScene('Home');
});
