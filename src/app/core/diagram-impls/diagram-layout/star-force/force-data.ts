import { AnalysisElementType } from '@core/models/analysis-element';

export const forceNodes = [
  {name: 'BrowseModule', elementType: AnalysisElementType.Module, group: '1'},
  {name: 'GraphicalCardComponent', elementType: AnalysisElementType.Component, group: '1'},
  {name: 'ListViewComponent', elementType: AnalysisElementType.Component, group: '1'},
  {name: 'CardComponent', elementType: AnalysisElementType.Component, group: '1'},
  {name: 'BrowseComponent', elementType: AnalysisElementType.Component, group: '1'},
  {name: 'SearchComponent', elementType: AnalysisElementType.Component, group: '1'},
  {name: 'CardsViewComponent', elementType: AnalysisElementType.Component, group: '1'},
  {name: 'BreadcrumbComponent', elementType: AnalysisElementType.Component, group: '1'},
  {name: 'ResultComponent', elementType: AnalysisElementType.Component, group: '1'},
  {name: 'GraphicalViewComponent', elementType: AnalysisElementType.Component, group: '1'},
  {name: 'DrawerDetailComponent', elementType: AnalysisElementType.Component, group: '1'},
  {name: 'ProductBuilder', elementType: AnalysisElementType.Service, group: '1'},
  {name: 'BreadcrumbService', elementType: AnalysisElementType.Service, group: '1'},
  {name: 'PoService', elementType: AnalysisElementType.Service, group: '1'},
  {name: 'BrowseHistoryBuilder', elementType: AnalysisElementType.Service, group: '1'},
  {name: 'ViewService', elementType: AnalysisElementType.Service, group: '1'},
  {name: 'BrowseService', elementType: AnalysisElementType.Service, group: '1'},
  {name: 'BrowseHelperService', elementType: AnalysisElementType.Service, group: '1'},
  {name: 'BrowseDrawerDataService', elementType: AnalysisElementType.Service, group: '1'},
  {name: 'DrawerPlusModule', elementType: AnalysisElementType.Module, group: '2'},
  {name: 'DrawerPlusComponent', elementType: AnalysisElementType.Component, group: '2'},
  {name: 'DrawerNodeComponent', elementType: AnalysisElementType.Component, group: '2'},
  {name: 'DrawerDropdownComponent', elementType: AnalysisElementType.Component, group: '2'},
  {name: 'DrawerNodeDetailComponent', elementType: AnalysisElementType.Component, group: '2'},
  {name: 'DrawerRootComponent', elementType: AnalysisElementType.Component, group: '2'},
  {name: 'ExpandableDrawerNodeComponent', elementType: AnalysisElementType.Component, group: '2'},
  {name: 'DrawerPlusDataService', elementType: AnalysisElementType.Service, group: '2'},
  {name: 'DrawerPlusService', elementType: AnalysisElementType.Service, group: '2'},
  {name: 'DrawerPlusModule3', elementType: AnalysisElementType.Module, group: '3'},
  {name: 'DrawerPlusComponent3', elementType: AnalysisElementType.Component, group: '3'},
  {name: 'DrawerNodeComponent3', elementType: AnalysisElementType.Component, group: '3'},
  {name: 'DrawerDropdownComponent3', elementType: AnalysisElementType.Component, group: '3'},
  {name: 'DrawerNodeDetailComponent3', elementType: AnalysisElementType.Component, group: '3'},
  {name: 'DrawerRootComponent3', elementType: AnalysisElementType.Component, group: '3'},
  {name: 'ExpandableDrawerNodeComponent3', elementType: AnalysisElementType.Component, group: '3'},
  {name: 'DrawerPlusDataService3', elementType: AnalysisElementType.Service, group: '3'},
  {name: 'DrawerPlusService3', elementType: AnalysisElementType.Service, group: '3'},
  {name: 'DrawerPlusModule44', elementType: AnalysisElementType.Module, group: '4'},
  {name: 'DrawerPlusComponent44', elementType: AnalysisElementType.Component, group: '4'},
  {name: 'DrawerNodeComponent44', elementType: AnalysisElementType.Component, group: '4'},
  {name: 'DrawerDropdownComponent44', elementType: AnalysisElementType.Component, group: '4'},
  {name: 'DrawerNodeDetailComponent44', elementType: AnalysisElementType.Component, group: '4'},
  {name: 'DrawerRootComponent44', elementType: AnalysisElementType.Component, group: '4'},
  {name: 'ExpandableDrawerNodeComponent44', elementType: AnalysisElementType.Component, group: '4'},
  {name: 'DrawerPlusDataService44', elementType: AnalysisElementType.Service, group: '4'},
  {name: 'DrawerPlusService44', elementType: AnalysisElementType.Service, group: '4'}
];

export const forceLinks = [
  {source: 'BrowseModule', target: 'GraphicalCardComponent'},
  {source: 'BrowseModule', target: 'ListViewComponent'},
  {source: 'BrowseModule', target: 'CardComponent'},
  {source: 'BrowseModule', target: 'BrowseComponent'},
  {source: 'BrowseModule', target: 'SearchComponent'},
  {source: 'BrowseModule', target: 'CardsViewComponent'},
  {source: 'BrowseModule', target: 'BreadcrumbComponent'},
  {source: 'BrowseModule', target: 'ResultComponent'},
  {source: 'BrowseModule', target: 'GraphicalViewComponent'},
  {source: 'BrowseModule', target: 'DrawerDetailComponent'},
  {source: 'BrowseModule', target: 'ProductBuilder'},
  {source: 'BrowseModule', target: 'BreadcrumbService'},
  {source: 'BrowseModule', target: 'PoService'},
  {source: 'BrowseModule', target: 'BrowseHistoryBuilder'},
  {source: 'BrowseModule', target: 'ViewService'},
  {source: 'BrowseModule', target: 'BrowseService'},
  {source: 'BrowseModule', target: 'BrowseHelperService'},
  {source: 'BrowseModule', target: 'BrowseDrawerDataService'},

  {source: 'BrowseModule', target: 'DrawerPlusModule'},
  {source: 'DrawerPlusModule', target: 'DrawerPlusComponent'},
  {source: 'DrawerPlusModule', target: 'DrawerNodeComponent'},
  {source: 'DrawerPlusModule', target: 'DrawerDropdownComponent'},
  {source: 'DrawerPlusModule', target: 'DrawerNodeDetailComponent'},
  {source: 'DrawerPlusModule', target: 'DrawerRootComponent'},
  {source: 'DrawerPlusModule', target: 'ExpandableDrawerNodeComponent'},
  {source: 'DrawerPlusModule', target: 'DrawerPlusDataService'},
  {source: 'DrawerPlusModule', target: 'DrawerPlusService'},

  {source: 'BrowseModule', target: 'DrawerPlusModule3'},
  {source: 'DrawerPlusModule3', target: 'DrawerPlusComponent3'},
  {source: 'DrawerPlusModule3', target: 'DrawerNodeComponent3'},
  {source: 'DrawerPlusModule3', target: 'DrawerDropdownComponent3'},
  {source: 'DrawerPlusModule3', target: 'DrawerNodeDetailComponent3'},
  {source: 'DrawerPlusModule3', target: 'DrawerRootComponent3'},
  {source: 'DrawerPlusModule3', target: 'ExpandableDrawerNodeComponent3'},
  {source: 'DrawerPlusModule3', target: 'DrawerPlusDataService3'},
  {source: 'DrawerPlusModule3', target: 'DrawerPlusService3'},

  {source: 'DrawerPlusModule', target: 'DrawerPlusModule44'},
  {source: 'DrawerPlusModule44', target: 'DrawerPlusComponent44'},
  {source: 'DrawerPlusModule44', target: 'DrawerNodeComponent44'},
  {source: 'DrawerPlusModule44', target: 'DrawerDropdownComponent44'},
  {source: 'DrawerPlusModule44', target: 'DrawerNodeDetailComponent44'},
  {source: 'DrawerPlusModule44', target: 'DrawerRootComponent44'},
  {source: 'DrawerPlusModule44', target: 'ExpandableDrawerNodeComponent44'},
  {source: 'DrawerPlusModule44', target: 'DrawerPlusDataService44'},
  {source: 'DrawerPlusModule44', target: 'DrawerPlusService44'},
];