export type TDirection = 'above' | 'right' | 'left' | 'below';

export type TField = {
  type: 'river' | 'grassplain' | 'load' | 'grass' | 'nofield' | 'floora' | 'floorb' | 'carpet';
}

export type TObjectAction = {
  execute: 'enterbuilding' | 'gootherfield' | 'stop' | 'jumpdown' | 'talk';
  direction?: TDirection;
  otherFieldId?: string;
  trigger: 'move' | 'push-a';
  talk?: {
    humanId: string,
    actionId: string
  }
}

export type TObjectType = 'human' | 'privatehouse' | 'pokemoncenter' |
                          'forestwall' | 'grass' | 'stonestep' | 'buildingwall' |
                          'computer' | 'recoverysystem' | 'bookshelf' | 'table' | 'yellowchair' | 'pinkchair' | 'plant';

export type TFieldObject = {
  objectType: TObjectType,
  objectDetail?: {
    humanId: string,
    direction: TDirection
  },
  objectId?: number,
  startMark: boolean,
  actions?: TObjectAction[],
}