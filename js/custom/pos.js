Blockly.Blocks['pos_getlevelbyname'] = {
  init: function() {
    this.jsonInit({
      "message0": '根据名称 %1 获取世界',
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "String"
		}
      ],
	  "output": "Level",
      "colour": 133,
      "tooltip": "获取世界(getLevelByName)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_getlevelbyname'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="server.getLevelByName("+valtmp+")"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['pos_formobject'] = {
  init: function() {
    this.jsonInit({
      "message0": '构建位置 世界: %1 x: %2 y: %3 z: %4 ',
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Level"
		},
		{
		  "type": "input_value",
		  "name": "X",
		  "check": "Number"
		},
		{
		  "type": "input_value",
		  "name": "Y",
		  "check": "Number"
		},
		{
		  "type": "input_value",
		  "name": "Z",
		  "check": "Number"
		}
      ],
	  "output": "Position",
      "colour": 133,
      "tooltip": "构建位置(Position.fromObject)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_formobject'] = function(block) {
  //String or array length.
  var leveltmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var xtmp = Blockly.JavaScript.valueToCode(block, 'X',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var ytmp = Blockly.JavaScript.valueToCode(block, 'Y',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var ztmp = Blockly.JavaScript.valueToCode(block, 'Z',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text='Java.type("cn.nukkit.level.Position").fromObject(manager.buildvec3('+xtmp+','+ytmp+','+ztmp+'),'+leveltmp+')'
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['pos_getx'] = {
  init: function() {
    this.jsonInit({
      "message0": '获取 %1 位置的x',
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Position"
		}
      ],
	  "output": "Number",
      "colour": 133,
      "tooltip": "获取位置的x(getX)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_getx'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=valtmp+".getX()"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['pos_gety'] = {
  init: function() {
    this.jsonInit({
      "message0": '获取 %1 位置的y',
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Position"
		}
      ],
	  "output": "Number",
      "colour": 133,
      "tooltip": "获取位置的y(getY)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_gety'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=valtmp+".getY()"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['pos_getz'] = {
  init: function() {
    this.jsonInit({
      "message0": '获取 %1 位置的z',
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Position"
		}
      ],
	  "output": "Number",
      "colour": 133,
      "tooltip": "获取位置的z(getZ)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_getz'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=valtmp+".getZ()"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['pos_getlevel'] = {
  init: function() {
    this.jsonInit({
      "message0": '获取 %1 位置的世界',
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Position"
		}
      ],
	  "output": "Level",
      "colour": 133,
      "tooltip": "获取位置的世界(getLevel)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_getlevel'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=valtmp+".getLevel()"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['pos_setlevel'] = {
  init: function() {
    this.jsonInit({
      "message0": '设置位置 %1 的世界为 %2',
      "args0": [
		{
		  "type": "input_value",
		  "name": "POS",
		  "check": "Position"
		},
		{
		  "type": "input_value",
		  "name": "LEVEL",
		  "check": "Level"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
	  "inputsInline": true,
      "colour": 133,
      "tooltip": "设置世界(setLevel)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_setlevel'] = function(block) {
  //String or array length.
  var leveltmp = Blockly.JavaScript.valueToCode(block, 'LEVEL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var postmp = Blockly.JavaScript.valueToCode(block, 'POS',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=postmp+".setLevel("+leveltmp+");\n"
  return text;
};
Blockly.Blocks['pos_setxyz'] = {
  init: function() {
    this.jsonInit({
      "message0": '设置位置 %1 的x %2 y %3 z %4',
      "args0": [
		{
		  "type": "input_value",
		  "name": "POS",
		  "check": "Position"
		},
		{
		  "type": "input_value",
		  "name": "X",
		  "check": "Number"
		},
		{
		  "type": "input_value",
		  "name": "Y",
		  "check": "Number"
		},
		{
		  "type": "input_value",
		  "name": "Z",
		  "check": "Number"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
	  "inputsInline": true,
      "colour": 133,
      "tooltip": "设置xyz(setComponents)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_setxyz'] = function(block) {
  //String or array length.
  var xtmp = Blockly.JavaScript.valueToCode(block, 'X',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var ytmp = Blockly.JavaScript.valueToCode(block, 'Y',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var ztmp = Blockly.JavaScript.valueToCode(block, 'Z',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var postmp = Blockly.JavaScript.valueToCode(block, 'POS',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=postmp+".setComponents("+xtmp+","+ytmp+","+ztmp+");\n"
  return text;
};
Blockly.Blocks['pos_getsafespawn'] = {
  init: function() {
    this.jsonInit({
      "message0": '获取世界 %1 的重生点',
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Level"
		}
      ],
	  "output": "Position",
      "colour": 133,
      "tooltip": "获取世界重生点(getSafeSpawn)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_getsafespawn'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=valtmp+".getSafeSpawn()"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['pos_setspawnlocation'] = {
  init: function() {
    this.jsonInit({
      "message0": '设置世界 %1 的重生点为位置 %2',
      "args0": [
		  {
		  "type": "input_value",
		  "name": "LEVEL",
		  "check": "Level"
		},
		{
		  "type": "input_value",
		  "name": "POS",
		  "check": "Position"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
	  "inputsInline": true,
      "colour": 133,
      "tooltip": "设置世界(setSpawnLocation)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_setspawnlocation'] = function(block) {
  //String or array length.
  var leveltmp = Blockly.JavaScript.valueToCode(block, 'LEVEL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var postmp = Blockly.JavaScript.valueToCode(block, 'POS',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text=leveltmp+".setSpawnLocation(manager.buildvec3("+postmp+".getX(),"+postmp+".getY(),"+postmp+".getZ()));\n"
  return text;
};
Blockly.Blocks['pos_makeSound'] = {
  init: function() {
    this.jsonInit({
      "message0": '在位置 %1 播放声音 %2',
      "args0": [
		{
		  "type": "input_value",
		  "name": "POS",
		  "check": "Position"
		},
		{
		  "type": "input_value",
		  "name": "MUSIC",
		  "check": "String"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
	  "inputsInline": true,
      "colour": 133,
      "tooltip": "播放声音(makeSound)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_makeSound'] = function(block) {
  //String or array length.
  var leveltmp = Blockly.JavaScript.valueToCode(block, 'MUSIC',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var postmp = Blockly.JavaScript.valueToCode(block, 'POS',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="blockitem.makeSound("+postmp+","+leveltmp+");\n"
  return text;
};
Blockly.Blocks['pos_makeExpBall'] = {
  init: function() {
    this.jsonInit({
      "message0": '在位置 %1 生成包含 %2 点经验值的经验球',
      "args0": [
		{
		  "type": "input_value",
		  "name": "POS",
		  "check": "Position"
		},
		{
		  "type": "input_value",
		  "name": "POINT",
		  "check": "Number"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
	  "inputsInline": true,
      "colour": 133,
      "tooltip": "经验球(makeExpBall)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_makeExpBall'] = function(block) {
  //String or array length.
  var leveltmp = Blockly.JavaScript.valueToCode(block, 'POINT',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var postmp = Blockly.JavaScript.valueToCode(block, 'POS',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="blockitem.makeExpBall("+postmp+","+leveltmp+");\n"
  return text;
};
Blockly.Blocks['pos_makeDropItem'] = {
  init: function() {
    this.jsonInit({
      "message0": '在位置 %1 生成与 %2 相同的掉落物',
      "args0": [
		{
		  "type": "input_value",
		  "name": "POS",
		  "check": "Position"
		},
		{
		  "type": "input_value",
		  "name": "ITEM",
		  "check": "Item"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
	  "inputsInline": true,
      "colour": 133,
      "tooltip": "生成掉落物(makeDropItem)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_makeDropItem'] = function(block) {
  //String or array length.
  var leveltmp = Blockly.JavaScript.valueToCode(block, 'ITEM',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var postmp = Blockly.JavaScript.valueToCode(block, 'POS',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="blockitem.makeDropItem("+postmp+","+leveltmp+");\n"
  return text;
};
Blockly.Blocks['pos_getBlock'] = {
  init: function() {
    this.jsonInit({
      "message0": '获取位置 %1 的方块',
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Position"
		}
      ],
	  "output": "Blocks",
      "colour": 133,
      "tooltip": "获取方块(getBlock)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_getBlock'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="blockitem.getBlock("+valtmp+")"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['pos_getLevelEntities'] = {
  init: function() {
    this.jsonInit({
      "message0": '获取位置 %1 所在世界的生物列表',
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Position"
		}
      ],
	  "output": "Array",
      "colour": 133,
      "tooltip": "获取位置所在世界的生物列表(getLevelEntities)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_getLevelEntities'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="blockitem.getLevelEntities("+valtmp+")"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['pos_getLevelPlayers'] = {
  init: function() {
    this.jsonInit({
      "message0": '获取位置 %1 所在世界的玩家列表',
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Position"
		}
      ],
	  "output": "Array",
      "colour": 133,
      "tooltip": "获取位置所在世界的玩家列表(getLevelPlayers)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_getLevelPlayers'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="blockitem.getLevelPlayers("+valtmp+")"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['pos_getIsSunny'] = {
  init: function() {
    this.jsonInit({
      "message0": '获取位置 %1 所在世界是否天气晴朗',
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Position"
		}
      ],
	  "output": "Boolean",
      "colour": 133,
      "tooltip": "获取位置所在世界是否天气晴朗(getIsSunny)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_getIsSunny'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="blockitem.getIsSunny("+valtmp+")"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['pos_isDay'] = {
  init: function() {
    this.jsonInit({
      "message0": '获取位置 %1 所在世界是否白天',
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Position"
		}
      ],
	  "output": "Boolean",
      "colour": 133,
      "tooltip": "获取位置所在世界是否白天(isDay)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_isDay'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="blockitem.isDay("+valtmp+")"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['pos_setLevelWeather'] = {
  init: function() {
    this.jsonInit({
      "message0": '设置位置 %1 天气为 %2 ',
      "args0": [
		{
		  "type": "input_value",
		  "name": "POS",
		  "check": "Position"
		},
		{
		    "type": "field_dropdown",
		    "name": "WEATHER",
		    "options": [
			  ["晴天", "clear"],
		      ["雨天", "rain"],
		      ["雷暴", "thunder"]
		    ]
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
	  "inputsInline": true,
      "colour": 133,
      "tooltip": "设置天气(setLevelWeather)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_setLevelWeather'] = function(block) {
  //String or array length.
  var weathertmp = block.getFieldValue("WEATHER");
  var postmp = Blockly.JavaScript.valueToCode(block, 'POS',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="blockitem.setLevelWeather("+postmp+",'"+weathertmp+"');\n"
  return text;
};
Blockly.Blocks['pos_setBlock'] = {
  init: function() {
    this.jsonInit({
      "message0": '设置位置 %1 方块为 %2 是否掉落粒子 %3 ',
      "args0": [
		{
		  "type": "input_value",
		  "name": "POS",
		  "check": "Position"
		},
		{
		  "type": "input_value",
		  "name": "BLOCK",
		  "check": "Blocks"
		},
		{
		  "type": "input_value",
		  "name": "PAR",
		  "check": "Boolean"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
	  "inputsInline": true,
      "colour": 133,
      "tooltip": "设置方块(setBlock)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_setBlock'] = function(block) {
  //String or array length.
  var leveltmp = Blockly.JavaScript.valueToCode(block, 'BLOCK',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var postmp = Blockly.JavaScript.valueToCode(block, 'POS',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var partmp = Blockly.JavaScript.valueToCode(block, 'PAR',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="blockitem.setBlock("+postmp+","+leveltmp+","+partmp+");\n"
  return text;
};
Blockly.Blocks['pos_getBlockInv'] = {
  init: function() {
    this.jsonInit({
      "message0": '获取位置 %1 方块的物品栏',
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Position"
		}
      ],
	  "output": "Inventory",
      "colour": 133,
      "tooltip": "获取方块物品栏(getBlockInv)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_getBlockInv'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="inventory.getBlockInv("+valtmp+")"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['pos_setBlockInv'] = {
  init: function() {
    this.jsonInit({
      "message0": '设置位置 %1 方块物品栏为 %2 ',
      "args0": [
		{
		  "type": "input_value",
		  "name": "POS",
		  "check": "Position"
		},
		{
		  "type": "input_value",
		  "name": "INV",
		  "check": "Inventory"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
	  "inputsInline": true,
      "colour": 133,
      "tooltip": "设置方块物品栏(setBlockInv)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_setBlockInv'] = function(block) {
  //String or array length.
  var invtmp = Blockly.JavaScript.valueToCode(block, 'INV',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var postmp = Blockly.JavaScript.valueToCode(block, 'POS',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="inventory.setBlockInv("+postmp+","+invtmp+");\n"
  return text;
};
Blockly.Blocks['pos_loadlevel'] = {
  init: function() {
    this.jsonInit({
      "message0": '强制加载名称为 %1 的世界',
      "args0": [
		{
		  "type": "input_value",
		  "name": "LEVEL",
		  "check": "String"
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
	  "inputsInline": true,
      "colour": 133,
      "tooltip": "加载世界(loadLevel)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_loadlevel'] = function(block) {
  //String or array length.
  var leveltmp = Blockly.JavaScript.valueToCode(block, 'LEVEL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="world.loadLevel("+leveltmp+");\n"
  return text;
};
Blockly.Blocks['pos_genLevel'] = {
  init: function() {
    this.jsonInit({
      "message0": '生成种子 %1 世界名 %2 种类 %3 的世界',
      "args0": [
		{
		  "type": "input_value",
		  "name": "SEED",
		  "check": "Number"
		},
		{
		  "type": "input_value",
		  "name": "LEVEL",
		  "check": "String"
		},
		{
		    "type": "field_dropdown",
		    "name": "OP",
		    "options": [
			  ["无限世界","NORMAL"],
			  ["超平坦", "FLAT"],
		      ["虚空世界", "VOID"],
		      ["下界世界", "NETHER"]
		    ]
		}
      ],
	  "nextStatement": null,
	  "previousStatement": null,
	  "inputsInline": true,
      "colour": 133,
      "tooltip": "生成世界(genLevel)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_genLevel'] = function(block) {
  //String or array length.
  var leveltmp = Blockly.JavaScript.valueToCode(block, 'LEVEL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var seedtmp = Blockly.JavaScript.valueToCode(block, 'SEED',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var optmp = block.getFieldValue("OP");
  var text="world.genLevel("+leveltmp+","+seedtmp+",\""+optmp+"\");\n"
  return text;
};
Blockly.Blocks['pos_getlevelname'] = {
  init: function() {
    this.jsonInit({
      "message0": '获取 %1 世界的名称',
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Level"
		}
      ],
	  "output": "String",
      "colour": 133,
      "tooltip": "获取世界的名称(getLevelName)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_getlevelname'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="blockitem.getLevelName("+valtmp+")"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['pos_getDropItems'] = {
  init: function() {
    this.jsonInit({
      "message0": '获取 %1 位置所在世界的掉落物列表',
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Position"
		}
      ],
	  "output": "Array",
      "colour": 133,
      "tooltip": "获取世界的掉落物列表(getDropItems)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_getDropItems'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="blockitem.getDropItems("+valtmp+")"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['pos_getEntities'] = {
  init: function() {
    this.jsonInit({
      "message0": '获取 %1 世界的生物列表',
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Level"
		}
      ],
	  "output": "Array",
      "colour": 133,
      "tooltip": "获取世界的生物列表(getEntities)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_getEntities'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="blockitem.getEntities("+valtmp+")"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['pos_getServerLevels'] = {
  init: function() {
    this.jsonInit({
      "message0": '获取服务器的世界列表',
	  "output": "Array",
      "colour": 133,
      "tooltip": "获取服务器的世界列表(getServerLevels)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_getServerLevels'] = function(block) {
  //String or array length.
  var text="blockitem.getServerLevels()"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['pos_getEntityByLevelAndID'] = {
  init: function() {
    this.jsonInit({
      "message0": '获取 %1 世界中id为 %2 的生物',
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Level"
		},
		{
		  "type": "input_value",
		  "name": "ID",
		  "check": "String"
		}
      ],
	  "output": "Entity",
      "colour": 133,
      "tooltip": "获取世界的生物(getEntityByLevelAndID)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_getEntityByLevelAndID'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var idtmp = Blockly.JavaScript.valueToCode(block, 'ID',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="entity.getEntityByLevelAndID("+valtmp+","+idtmp+")"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};
Blockly.Blocks['pos_getLevelFloatingText'] = {
  init: function() {
    this.jsonInit({
      "message0": '获取 %1 世界中的浮空字实体列表',
      "args0": [
		{
		  "type": "input_value",
		  "name": "VAL",
		  "check": "Level"
		}
      ],
	  "output": "Array",
      "colour": 133,
      "tooltip": "获取世界的浮空字列表(getLevelFloatingText)",
      "helpUrl": "#"
    });
  }
};
Blockly.JavaScript['pos_getLevelFloatingText'] = function(block) {
  //String or array length.
  var valtmp = Blockly.JavaScript.valueToCode(block, 'VAL',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var text="entity.getLevelFloatingText("+valtmp+")"
  return [text, Blockly.JavaScript.ORDER_MEMBER];
};