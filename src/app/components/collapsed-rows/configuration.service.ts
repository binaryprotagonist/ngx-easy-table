import { Injectable } from '@angular/core';
import { Config } from '../../ngx-easy-table/model/config';

@Injectable()
export class ConfigService {
  public static config: Config = {
    searchEnabled: false,
    headerEnabled: true,
    orderEnabled: false,
    globalSearchEnabled: false,
    paginationEnabled: true,
    exportEnabled: false,
    clickEvent: false,
    selectRow: false,
    selectCol: false,
    selectCell: false,
    rows: 10,
    additionalActions: false,
    serverPagination: false,
    isLoading: false,
    detailsTemplate: true,
    groupRows: false,
    paginationRangeEnabled: true,
    collapseAllRows: true,
    checkboxes: false,
    resizeColumn: false,
    fixedColumnWidth: false,
    horizontalScroll: false,
    pinnedCol: false,
    tableLayout: {
      style: 'normal',
      border: true,
      hover: true,
      striped: false,
    }
  };
}