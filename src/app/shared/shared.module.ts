import { NgModule } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { BadgeModule } from 'primeng/badge';
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { FileUploadModule } from 'primeng/fileupload';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { DialogService } from 'primeng/dynamicdialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ListboxModule } from 'primeng/listbox';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { DividerModule } from 'primeng/divider';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { ColorPickerModule } from 'primeng/colorpicker';
import { InputNumberModule } from 'primeng/inputnumber';
import { ImageModule } from 'primeng/image';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SpeedDialModule } from 'primeng/speeddial';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MultiSelectModule } from 'primeng/multiselect';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { SkeletonModule } from 'primeng/skeleton';
import { RatingModule } from 'primeng/rating';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ChipModule } from 'primeng/chip';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DataViewModule } from 'primeng/dataview';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CheckboxModule } from 'primeng/checkbox';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { StepsModule } from 'primeng/steps';
import { ConfirmationService } from 'primeng/api';
import { AccordionModule } from 'primeng/accordion';
import { PaginatorModule } from 'primeng/paginator';
import { ContextMenuModule } from 'primeng/contextmenu';
import { CommonModule } from '@angular/common';
import { TreeModule } from 'primeng/tree';
import { CarouselModule } from 'primeng/carousel';
import { TabMenuModule } from 'primeng/tabmenu';


const listService = [
    ConfirmationService,
    DialogService,
];

@NgModule({
    declarations: [
    ],
    imports: [
        ReactiveFormsModule,
        FormsModule,
        BreadcrumbModule,
        InputTextModule,
        TableModule,
        CommonModule,
        ButtonModule,
        OverlayPanelModule,
        SidebarModule,
        DropdownModule,
        CalendarModule,
        DataViewModule,
        CardModule,
        TabViewModule
    ],
    exports: [
        ToolbarModule,
        ButtonModule,
        MenuModule,
        BadgeModule,
        SidebarModule,
        PanelMenuModule,
        InputTextModule,
        TableModule,
        TabViewModule,
        FileUploadModule,
        DialogModule,
        ToastModule,
        ConfirmDialogModule,
        ListboxModule,
        FormsModule,
        DropdownModule,
        CalendarModule,
        MessagesModule,
        MessageModule,
        DividerModule,
        InputSwitchModule,
        TimelineModule,
        CardModule,
        ReactiveFormsModule,
        PasswordModule,
        ColorPickerModule,
        InputNumberModule,
        ImageModule,
        SelectButtonModule,
        DataViewModule,
        AutoCompleteModule,
        SpeedDialModule,
        MultiSelectModule,
        CheckboxModule,
        SplitButtonModule,
        OverlayPanelModule,
        MenubarModule,
        AvatarModule,
        SkeletonModule,
        RatingModule,
        DataViewModule,
        StepsModule,
        BreadcrumbModule,
        ChipModule,
        AccordionModule,
        PanelModule,
        PaginatorModule,
        RadioButtonModule,
        ContextMenuModule,
        TreeModule,
        TabMenuModule,
        CarouselModule,
    ],
})
export class SharedModule {}
