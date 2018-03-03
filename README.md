<HTML>
<h1>Architecture:</h1>

<h3> Top Level: </h3>
Application:
State: {Char, Map, Settings, UI_State, Static}
Components: {MapMaker, Controller, TurnTicker, Layout}


<h3> Mid->Low Level Objects:</h3>
Character:
State: {Attr, Objs}

Map: 
State: {[x][y] Tile, Attr(depth [..])}

Tile:
State: {floor_id, objs, monsters}
	Obj:
	{type_id, attr, FLAGS}  i.e. SEEN
	
	Creature:
	{type_id, attr, FLAGS}  i.e. IS_SLEEP, FAST
 
Settings:
State: {[...]}

Static:
State: {Objs, Creatures, Terrain}

<h3>Mid Level Components:</h3>
MapMaker:
  Methods: {Basic, AddRooms, AddCorridors, AddDoors, AddMonsters, AddObjects [...] }
  Return: Map

Controller:
  Props: {CurrUI, Map, Char}
  State: {partialAction} 
  KeyPressRouter
  MouseClickRouter

TurnTicker:
   Props: {Map}
   Methods: { foreach(Map->Creature){creature->takeTurn}  if( IS_FAST){two_turns} 
	
Layout:
Props: {Map, Char}
Components: {CharGen, CharUI, GameUI, WinUI, DeadUI}

  GameUI: 
  Components:{MessageUI, CharStubUI, MapUI, TargetUI, ItemsUI}
  Methods:{RenderMap(Map, Settings, Static)
  
  



</HTML>
