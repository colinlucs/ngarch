import {
  AngularCliCommand,
  AngularCliCommandType,
  AngularCliOperandTemplate
} from '../../../../models/angular-cli';
import { MetaDataType } from '@config/meta-config';

export const AngularCli_V1_Component = [
  {
    command: AngularCliCommandType.Generate,
    template: AngularCliOperandTemplate.Component,
    description: 'Generates a component',
    operand: {
      name: 'my-new-component',
    },
    options: [
      {
        option: 'dry-run',
        alias: 'd',
        optionValue: {
          defaultValue: true,
          dataType: MetaDataType.Boolean,
        },
        description: 'Run through without making any changes.'
      },
      {
        option: 'force',
        alias: 'f',
        optionValue: {
          defaultValue: false,
          dataType: MetaDataType.Boolean,
        },
        description: 'Forces overwriting of files.'
      },
      {
        option: 'app',
        alias: 'a',
        optionValue: {
          defaultValue: '1st app',
          dataType: MetaDataType.String
        },
        description: 'Specifies app name to use.'
      },
      {
        option: 'change-detection',
        alias: 'c',
        description: 'Specifies the change detection strategy.',
        optionValue: {
          dataType: MetaDataType.String,
          possibleValues: ['Default', 'OnPush' ],
          defaultValue: 'Default'
        }
      },
      {
        option: 'flat',
        optionValue: {
          defaultValue: false,
          dataType: MetaDataType.Boolean,
        },
        description: 'Flag to indicate if a dir is created.'
      },
      {
        option: 'export',
        optionValue: {
          defaultValue: false,
          dataType: MetaDataType.Boolean,
        },
        description: 'Specifies if declaring module exports the component.'
      },
      {
        option: 'inline-style',
        alias: 's',
        optionValue: {
          defaultValue: false,
          dataType: MetaDataType.Boolean,
        },
        description: 'Specifies if the style will be in the ts file.'
      },
      {
        option: 'inline-template',
        alias: 't',
        optionValue: {
          defaultValue: false,
          dataType: MetaDataType.Boolean,
        },
        description: 'Specifies if the template will be in the ts file.'
      },
      {
        option: 'module ',
        alias: 'm',
        description: 'Allows specification of the declaring module.',
        optionValue: {
          dataType: MetaDataType.String
        }
      },
      {
        option: 'prefix',
        description: 'Specifies whether to use the prefix.',
        optionValue: {
          dataType: MetaDataType.String
        }
      },
      {
        option: 'skip-import',
        optionValue: {
          defaultValue: false,
          dataType: MetaDataType.Boolean,
        },
        description: 'Allows for skipping the module import.'
      },
      {
        option: 'spec',
        description: 'Specifies if a spec file is generated.',
        optionValue: {
          dataType: MetaDataType.Boolean,
          defaultValue: true
        }
      },
      {
        option: 'view-encapsulation',
        alias: 'v',
        description: 'Specifies the view encapsulation strategy.',
        optionValue: {
          dataType: MetaDataType.String,
          possibleValues: ['Emulated', 'Native', 'None', 'ShadowDom' ],
          defaultValue: 'None'
        }
      }
    ]
  }
] as AngularCliCommand[];
