// Type definitions for @ag-grid-community/core v25.1.0
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { GridPanel } from "../../gridPanel/gridPanel";
import { RowNode } from "../../entities/rowNode";
import { BeanStub } from "../../context/beanStub";
export declare class AutoHeightCalculator extends BeanStub {
    private beans;
    private $scope;
    private columnController;
    private rowCssClassCalculator;
    $compile: any;
    private gridPanel;
    registerGridComp(gridPanel: GridPanel): void;
    getPreferredHeightForRow(rowNode: RowNode): number;
    private addInRowCssClasses;
}
