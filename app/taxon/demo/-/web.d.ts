declare class WeakMap<Key, Value> {
    delete(key: Key): boolean;
    get(key: Key): Value;
    has(key: Key): boolean;
    set(key: Key, value: Value): Map<Key, Value>;
}
declare class Map<Key, Value> {
    clear(): void;
    delete(key: Key): boolean;
    forEach<Context = any>(handler: (this: Context, value: Value, key: Key, map: Map<Key, Value>) => void, context?: Context): void;
    get(key: Key): Value;
    has(key: Key): boolean;
    set(key: Key, value: Value): Map<Key, Value>;
    size: number;
}
declare class Set<Value> {
    add(value: Value): Set<Value>;
    clear(): void;
    delete(value: Value): boolean;
    forEach<Context = any>(handler: (this: Context, value: Value, key: Value, map: Set<Value>) => void, context?: Context): void;
    has(value: Value): boolean;
    size: number;
}
interface Function {
    name: string;
}
declare namespace $ {
    var $mol_func_name_dict: WeakMap<Function, string>;
    function $mol_func_name(func: Function): string;
}
declare namespace $ {
    function $mol_deprecated<Host, Method extends Function>(message: string): (host: Host, field: string, descr: TypedPropertyDescriptor<Method>) => void;
}
declare namespace $ {
    function $mol_log(path: string, values: any[]): void;
    namespace $mol_log {
        function filter(next?: string): string;
    }
}
declare namespace $ {
    class $mol_object {
        Class(): any;
        static toString(): string;
        private 'object_owner()';
        object_owner(next?: Object): Object;
        private 'object_field()';
        object_field(next?: string): string;
        toString(): string;
        toJSON(): string;
        static make<Instance>(this: {
            new (): Instance;
        }, config: Partial<Instance>): Instance;
        setup(script: (obj: this) => void): this;
        'destroyed()': boolean;
        destroyed(next?: boolean): boolean;
        log(values: any[]): void;
    }
}
declare namespace $ {
    class $mol_defer extends $mol_object {
        run: () => void;
        constructor(run: () => void);
        destroyed(next?: boolean): boolean;
        static all: $mol_defer[];
        static timer: number;
        static scheduleNative: (handler: () => void) => number;
        static schedule(): void;
        static unschedule(): void;
        static add(defer: $mol_defer): void;
        static drop(defer: $mol_defer): void;
        static run(): void;
    }
}
declare namespace $ {
    var $mol_state_stack: Map<string, any>;
}
declare var Proxy: any;
declare namespace $ {
    enum $mol_atom_status {
        obsolete = "obsolete",
        checking = "checking",
        pulling = "pulling",
        actual = "actual",
    }
    class $mol_atom<Value = null> extends $mol_object {
        masters: Set<$mol_atom<any>> | null;
        slaves: Set<$mol_atom<any>> | null;
        status: $mol_atom_status;
        autoFresh: boolean;
        handler: (next?: Value | Error, force?: $mol_atom_force) => Value | void;
        host: {
            [key: string]: any;
        };
        field: string;
        constructor(host: any, handler?: (next?: Value, force?: $mol_atom_force) => Value | void, field?: string);
        destroyed(next?: boolean): boolean;
        unlink(): void;
        toString(): string;
        get(force?: $mol_atom_force): Value;
        actualize(force?: $mol_atom_force): void;
        pull(force?: $mol_atom_force): any;
        _next?: Value | Error;
        set(next: Value): Value;
        normalize(next: Value, prev?: Value | Error): Value;
        push(next_raw?: Value | Error): any;
        obsolete_slaves(): void;
        check_slaves(): void;
        check(): void;
        obsolete(): void;
        lead(slave: $mol_atom<any>): void;
        dislead(slave: $mol_atom<any>): void;
        obey(master: $mol_atom<any>): void;
        disobey(master: $mol_atom<any>): void;
        disobey_all(): void;
        value(next?: Value, force?: $mol_atom_force): any;
        static stack: $mol_atom<any>[];
        static updating: $mol_atom<any>[];
        static reaping: Set<$mol_atom<any>>;
        static scheduled: boolean;
        static actualize(atom: $mol_atom<any>): void;
        static reap(atom: $mol_atom<any>): void;
        static unreap(atom: $mol_atom<any>): void;
        static schedule(): void;
        static sync(): void;
        then<Next>(done: (prev?: Value) => Next, fail?: (error: Error) => Next): $mol_atom<any>;
        catch(fail: (error: Error) => Value): $mol_atom<any>;
    }
    class $mol_atom_wait extends Error {
        name: string;
        constructor(message?: string);
    }
    class $mol_atom_force extends Object {
        $mol_atom_force: boolean;
        static $mol_atom_force: boolean;
    }
}
declare namespace $ {
    function $mol_mem<Host, Value>(config?: {
        lazy?: boolean;
    }): (obj: Host, name: string, descr: TypedPropertyDescriptor<(next?: Value, force?: $mol_atom_force) => Value>) => void;
    function $mol_mem_key<Host, Key, Value>(config?: {
        lazy?: boolean;
    }): (obj: Host, name: string, descr: TypedPropertyDescriptor<(key: Key, next?: Value, force?: $mol_atom_force) => Value>) => void;
}
declare namespace $ {
    class $mol_window extends $mol_object {
        static size(next?: {
            width: number;
            height: number;
        }): {
            width: number;
            height: number;
        };
    }
}
declare namespace $ {
    var $mol_dom_context: Window & {
        Node: typeof Node;
        Element: typeof Element;
        HTMLElement: typeof HTMLElement;
        XMLHttpRequest: typeof XMLHttpRequest;
    };
}
declare namespace $ {
}
declare namespace $ {
    function $mol_dom_make(id?: string, localName?: string, namespaceURI?: string): Element;
}
declare namespace $ {
    function $mol_dom_render_fields(el: Element, fields: {
        [key: string]: any;
    }): void;
    function $mol_dom_render_children(el: Element, childNodes: NodeList | Array<Node | string | number | boolean | {
        dom_tree: () => Node;
    }>): void;
    function $mol_dom_render_attributes(el: Element, attrs: {
        [key: string]: string | number | boolean;
    }): void;
    function $mol_dom_render_styles(el: Element, styles: {
        [key: string]: string | number;
    }): void;
    function $mol_dom_render_events(el: Element, events: {
        [key: string]: (event: Event) => any;
    }): void;
    function $mol_dom_render_events_async(el: Element, events: {
        [key: string]: (event: Event) => any;
    }): void;
}
declare namespace $ {
    namespace $mol {
    }
    type $mol_view_context = (typeof $) & (typeof $.$mol);
    function $mol_view_visible_width(): number;
    function $mol_view_visible_height(): number;
    function $mol_view_state_key(suffix: string): string;
    class $mol_view extends $mol_object {
        static Root(id: number): $mol_view;
        title(): string;
        focused(next?: boolean): boolean;
        context(next?: $mol_view_context): any;
        $: $mol_view_context;
        context_sub(): any;
        state_key(suffix?: string): string;
        dom_name(): string;
        dom_name_space(): string;
        sub(): (string | number | boolean | Node | $mol_view)[];
        sub_visible(): (string | number | boolean | Node | $mol_view)[];
        minimal_width(): number;
        minimal_height(): number;
        'view_classes()': Function[];
        view_classes(): Function[];
        'dom_node()': Element;
        dom_node(): Element;
        dom_tree(): Element;
        render(): void;
        attr_static(): {
            [key: string]: string | number | boolean;
        };
        attr(): {
            [key: string]: string | number | boolean;
        };
        style(): {
            [key: string]: string | number;
        };
        field(): {
            [key: string]: any;
        };
        event(): {
            [key: string]: (event: Event) => void;
        };
        event_async(): {
            [key: string]: (event: Event) => void;
        };
        'locale_contexts()': string[];
        locale_contexts(): string[];
        plugins(): $mol_view[];
    }
}
interface Window {
    cordova: any;
}
declare namespace $ {
}
declare namespace $ {
    class $mol_view_selection extends $mol_object {
        static focused(next?: Element[], force?: $mol_atom_force): Element[];
        static position(...diff: any[]): any;
        static onFocus(event: FocusEvent): void;
        static onBlur(event: FocusEvent): void;
    }
}
declare namespace $ {
}
declare namespace $ {
    enum $mol_keyboard_code {
        backspace = 8,
        tab = 9,
        enter = 13,
        shift = 16,
        ctrl = 17,
        alt = 18,
        pause = 19,
        capsLock = 20,
        escape = 27,
        space = 32,
        pageUp = 33,
        pageDown = 34,
        end = 35,
        home = 36,
        left = 37,
        up = 38,
        right = 39,
        down = 40,
        insert = 45,
        delete = 46,
        key0 = 48,
        key1 = 49,
        key2 = 50,
        key3 = 51,
        key4 = 52,
        key5 = 53,
        key6 = 54,
        key7 = 55,
        key8 = 56,
        key9 = 57,
        A = 65,
        B = 66,
        C = 67,
        D = 68,
        E = 69,
        F = 70,
        G = 71,
        H = 72,
        I = 73,
        J = 74,
        K = 75,
        L = 76,
        M = 77,
        N = 78,
        O = 79,
        P = 80,
        Q = 81,
        R = 82,
        S = 83,
        T = 84,
        U = 85,
        V = 86,
        W = 87,
        X = 88,
        Y = 89,
        Z = 90,
        metaLeft = 91,
        metaRight = 92,
        select = 93,
        numpad0 = 96,
        numpad1 = 97,
        numpad2 = 98,
        numpad3 = 99,
        numpad4 = 100,
        numpad5 = 101,
        numpad6 = 102,
        numpad7 = 103,
        numpad8 = 104,
        numpad9 = 105,
        multiply = 106,
        add = 107,
        subtract = 109,
        decimal = 110,
        divide = 111,
        F1 = 112,
        F2 = 113,
        F3 = 114,
        F4 = 115,
        F5 = 116,
        F6 = 117,
        F7 = 118,
        F8 = 119,
        F9 = 120,
        F10 = 121,
        F11 = 122,
        F12 = 123,
        numLock = 144,
        scrollLock = 145,
        semicolon = 186,
        equals = 187,
        comma = 188,
        dash = 189,
        period = 190,
        forwardSlash = 191,
        graveAccent = 192,
        bracketOpen = 219,
        slashBack = 220,
        bracketClose = 221,
        quoteSingle = 222,
    }
}
declare namespace $ {
    class $mol_button extends $mol_view {
        enabled(): boolean;
        event_click(event?: any, force?: $mol_atom_force): any;
        event_activate(event?: any, force?: $mol_atom_force): any;
        event_key_press(event?: any, force?: $mol_atom_force): any;
        event(): {
            "click": (event?: any) => any;
            "keypress": (event?: any) => any;
        };
        disabled(): boolean;
        tab_index(): string;
        hint(): string;
        attr(): {
            "disabled": boolean;
            "role": string;
            "tabindex": string;
            "title": string;
        };
        sub(): any[];
    }
}
declare namespace $.$mol {
    class $mol_button extends $.$mol_button {
        disabled(): boolean;
        event_activate(next: Event): void;
        event_key_press(event: KeyboardEvent): void;
        tab_index(): string;
    }
}
declare namespace $ {
    class $mol_button_typed extends $mol_button {
    }
}
declare namespace $ {
    class $mol_button_major extends $mol_button_typed {
    }
}
declare namespace $ {
    class $mol_button_minor extends $mol_button_typed {
    }
}
declare namespace $ {
    class $mol_button_danger extends $mol_button_typed {
    }
}
declare namespace $ {
    class $mol_scroll extends $mol_view {
        minimal_height(): number;
        scroll_top(val?: any, force?: $mol_atom_force): any;
        scroll_left(val?: any, force?: $mol_atom_force): any;
        scroll_bottom(val?: any, force?: $mol_atom_force): any;
        scroll_right(val?: any, force?: $mol_atom_force): any;
        field(): {
            "scrollTop": any;
            "scrollLeft": any;
            "scrollBottom": any;
            "scrollRight": any;
        };
        event_scroll(event?: any, force?: $mol_atom_force): any;
        event_async(): {
            "scroll": (event?: any) => any;
        };
    }
}
declare namespace $.$mol {
    function $mol_scroll_top(): number;
    function $mol_scroll_left(): number;
    function $mol_scroll_moving(): boolean;
    class $mol_scroll extends $.$mol_scroll {
        scroll_bottom(next?: number): number;
        scroll_right(next?: number): number;
        event_scroll(next?: Event): void;
        event_repos(next?: Event): void;
        _moving_task_timer: number;
        moving_task_stop(): void;
        moving(next?: boolean): boolean;
        context_sub(): $mol_view_context;
    }
}
declare namespace $ {
    class $mol_state_session<Value> extends $mol_object {
        static 'native()': Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;
        static native(): {
            getItem(key: string): any;
            setItem(key: string, value: string): void;
            removeItem(key: string): void;
        };
        static value<Value>(key: string, next?: Value): Value;
        prefix(): string;
        value(key: string, next?: Value): Value;
    }
}
declare namespace $ {
    class $mol_page extends $mol_view {
        focus_trigger(): any;
        event_top(val?: any, force?: $mol_atom_force): any;
        Title(): $mol_button;
        tools(): any[];
        Tools(): $mol_view;
        head(): any[];
        Head(): $mol_view;
        body_scroll_top(val?: any, force?: $mol_atom_force): any;
        body(): any[];
        Body(): $mol_scroll;
        foot(): any[];
        Foot(): $mol_view;
        sub(): any[];
    }
}
declare namespace $.$mol {
    class $mol_page extends $.$mol_page {
        body_scroll_top(next?: number): number;
        head(): ($mol_view | $.$mol_button)[];
    }
}
declare namespace $ {
    class $mol_state_local<Value> extends $mol_object {
        static 'native()': Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;
        static native(): {
            getItem(key: string): any;
            setItem(key: string, value: string): void;
            removeItem(key: string): void;
        };
        static value<Value>(key: string, next?: Value, force?: $mol_atom_force): Value;
        prefix(): string;
        value(key: string, next?: Value): Value;
    }
}
declare namespace $ {
}
declare namespace $ {
    function $mol_const<Value>(value: Value): {
        (): Value;
        '()': Value;
    };
}
declare namespace $ {
    class $mol_http extends $mol_object {
        static resource(uri: string): $mol_http;
        static resource_absolute(uri: string): $mol_http;
        uri(): string;
        method_get(): string;
        method_put(): string;
        credentials(): {
            login?: string;
            password?: string;
        };
        headers(): {};
        'request()': XMLHttpRequest;
        request(): XMLHttpRequest;
        destroyed(next?: boolean): boolean;
        response(next?: any, force?: $mol_atom_force): XMLHttpRequest;
        text(next?: string, force?: $mol_atom_force): string;
        json<Content>(next?: Content, force?: $mol_atom_force): Content;
    }
}
declare namespace $ {
    class $mol_http_resource extends $mol_http {
        static item(uri: string): $mol_http;
    }
    class $mol_http_resource_json {
        static item(uri: string): $mol_http;
    }
}
declare namespace $ {
    class $mol_file extends $mol_object {
        static absolute(path: string): $mol_file;
        static relative(path: string): $mol_file;
        path(): string;
        parent(): $mol_file;
        name(): string;
        ext(): string;
        content(next?: string, force?: $mol_atom_force): string;
        resolve(path: string): $mol_file;
        relate(base?: any): void;
    }
}
declare namespace $ {
    interface $mol_locale_dict {
        [key: string]: string;
    }
    class $mol_locale extends $mol_object {
        static lang_default(): string;
        static lang(next?: string): string;
        static source(lang: string): any;
        static texts(next?: $mol_locale_dict): $mol_locale_dict;
        static text(contexts: string[], key: string): string;
    }
}
declare namespace $ {
    class $mol_float extends $mol_view {
        shiftStyle(): string;
        style(): {
            "transform": string;
        };
        scrolling(): boolean;
        attr(): {
            "mol_float_scrolling": boolean;
        };
    }
}
declare namespace $.$mol {
    class $mol_float extends $.$mol_float {
        shiftStyle(): string;
        scrolling(): boolean;
    }
}
declare namespace $ {
    class $mol_check extends $mol_button_typed {
        checked(val?: any, force?: $mol_atom_force): any;
        attr(): {
            "mol_check_checked": any;
            "aria-checked": any;
            "role": string;
            "disabled": boolean;
            "tabindex": string;
            "title": string;
        };
        Icon(): any;
        title(): string;
        label(): any[];
        Label(): $mol_view;
        sub(): any[];
    }
}
declare namespace $.$mol {
    class $mol_check extends $.$mol_check {
        event_click(next?: Event): void;
        sub(): any[];
    }
}
declare namespace $ {
    class $mol_svg extends $mol_view {
        dom_name(): string;
        dom_name_space(): string;
    }
}
declare namespace $ {
    class $mol_svg_root extends $mol_svg {
        dom_name(): string;
        view_box(): string;
        aspect(): string;
        attr(): {
            "viewBox": string;
            "preserveAspectRatio": string;
        };
    }
}
declare namespace $ {
    class $mol_svg_group extends $mol_svg {
        dom_name(): string;
    }
}
declare namespace $ {
    class $mol_svg_line extends $mol_svg {
        dom_name(): string;
        from(): any[];
        to(): any[];
        pos(): any[];
        from_x(): string;
        from_y(): string;
        to_x(): string;
        to_y(): string;
        attr(): {
            "x1": string;
            "y1": string;
            "x2": string;
            "y2": string;
        };
    }
}
declare namespace $ {
    class $mol_svg_path extends $mol_svg {
        dom_name(): string;
        geometry(): string;
        attr(): {
            "d": string;
        };
    }
}
declare namespace $ {
    class $mol_svg_circle extends $mol_svg {
        dom_name(): string;
        pos(): any[];
        radius(): string;
        pos_x(): string;
        pos_y(): string;
        attr(): {
            "r": string;
            "cx": string;
            "cy": string;
        };
    }
}
declare namespace $ {
    class $mol_svg_text extends $mol_svg {
        dom_name(): string;
        pos(): any[];
        pos_x(): string;
        pos_y(): string;
        align(): string;
        attr(): {
            "x": string;
            "y": string;
            "text-anchor": string;
        };
        text(): string;
        sub(): any[];
    }
}
declare namespace $.$mol {
    class $mol_svg_line extends $.$mol_svg_line {
        from(): any;
        from_x(): any;
        from_y(): any;
        to(): any;
        to_x(): any;
        to_y(): any;
    }
    class $mol_svg_circle extends $.$mol_svg_circle {
        pos_x(): any;
        pos_y(): any;
    }
    class $mol_svg_text extends $.$mol_svg_text {
        pos_x(): any;
        pos_y(): any;
    }
}
declare namespace $ {
    class $mol_icon extends $mol_svg_root {
        view_box(): string;
        path(): string;
        Path(): $mol_svg_path;
        sub(): any[];
    }
}
declare namespace $ {
    class $mol_icon_tick extends $mol_icon {
        path(): string;
    }
}
declare namespace $ {
    class $mol_check_box extends $mol_check {
        Icon(): $mol_icon_tick;
    }
}
declare namespace $ {
    class $mol_icon_chevron extends $mol_icon {
        path(): string;
    }
}
declare namespace $ {
    class $mol_check_expand extends $mol_check {
        Icon(): $mol_icon_chevron;
        level(): number;
        level_style(): string;
        style(): {
            "paddingLeft": string;
        };
        expanded(val?: any, force?: $mol_atom_force): any;
        checked(val?: any, force?: $mol_atom_force): any;
        expandable(): boolean;
        enabled(): boolean;
    }
}
declare namespace $.$mol {
    class $mol_check_expand extends $.$mol_check_expand {
        level_style(): string;
        expandable(): boolean;
    }
}
declare namespace $ {
    class $mol_dimmer extends $mol_view {
        haystack(): string;
        needle(): string;
        parts(): any[];
        sub(): any[];
        string(id: any): string;
        Low(id: any): $mol_view;
    }
}
declare namespace $.$mol {
    class $mol_dimmer extends $.$mol_dimmer {
        parts(): any[];
        strings(): string[];
        string(index: number): string;
    }
}
declare namespace $ {
    class $mol_grid extends $mol_scroll {
        row_ids(): any[];
        row_id(index: any): any;
        col_ids(): any[];
        records(): {};
        record(id: any): any;
        hierarchy(): any;
        hierarchy_col(): string;
        gap_top(): number;
        rows_visible(): any[];
        Table(): $mol_grid_table;
        height(): number;
        Gap(): $mol_grid_gap;
        sub(): any[];
        rows(): any[];
        row_height(): number;
        head_cells(): any[];
        Head(): $mol_grid_row;
        cells(id: any): any[];
        Row(id: any): $mol_grid_row;
        cell(id: any): any;
        cell_content(id: any): any[];
        cell_content_text(id: any): any[];
        Cell_text(id: any): $mol_grid_cell;
        cell_content_number(id: any): any[];
        Cell_number(id: any): $mol_grid_number;
        col_head_content(id: any): any[];
        Col_head(id: any): $mol_float;
        cell_level(id: any): number;
        cell_expanded(id: any, val?: any, force?: $mol_atom_force): any;
        Cell_branch(id: any): $mol_check_expand;
        needle(): string;
        cell_value(id: any): string;
        Cell_dimmer(id: any): $mol_dimmer;
        Cell_content(id: any): any[];
    }
}
declare namespace $ {
    class $mol_grid_table extends $mol_view {
        dom_name(): string;
        offset(): number;
        style(): {
            "top": number;
        };
    }
}
declare namespace $ {
    class $mol_grid_gap extends $mol_view {
        offset(): number;
        style(): {
            "top": number;
        };
    }
}
declare namespace $ {
    class $mol_grid_row extends $mol_view {
        dom_name(): string;
        height(): number;
        style(): {
            "height": number;
        };
        cells(): any[];
        sub(): any[];
    }
}
declare namespace $ {
    class $mol_grid_cell extends $mol_view {
        dom_name(): string;
    }
}
declare namespace $ {
    class $mol_grid_number extends $mol_grid_cell {
    }
}
declare namespace $.$mol {
    interface $mol_grid_node {
        id: string;
        parent: $mol_grid_node;
        sub: $mol_grid_node[];
    }
    class $mol_grid extends $.$mol_grid {
        rows_visible(): any[];
        rows_visible_max(): number;
        view_window(): {
            top: number;
            bottom: number;
            count: number;
        };
        gap_top(): number;
        height(): number;
        head_cells(): $.$mol_float[];
        col_head_content(colId: string): string[];
        rows(): $mol_grid_row[];
        cells(row_id: string[]): $mol_view[];
        col_type(col_id: string): "text" | "number" | "branch";
        Cell(id: {
            row: string[];
            col: string;
        }): $mol_view;
        cell_content(id: {
            row: string[];
            col: string;
        }): any[];
        records(): any;
        record(id: string): any;
        record_ids(): string[];
        row_id(index: number): string;
        col_ids(): string[];
        hierarchy(): {
            [id: string]: $mol_grid_node;
        };
        row_sub_ids(row: string[]): string[][];
        row_root_id(): string[];
        cell_level(id: {
            row: string[];
        }): number;
        row_ids(): string[][];
        row_expanded(row_id: string[], next?: boolean): boolean;
        row_expanded_default(row_id: string[]): boolean;
        cell_expanded(id: {
            row: string[];
        }, next?: boolean): boolean;
    }
    class $mol_grid_table extends $.$mol_grid_table {
        context_sub(): $mol_view_context;
    }
}
declare namespace $ {
    class $mol_app_taxon extends $mol_page {
        title(): string;
        hierarchy(): any;
        hierarchy_field(): string;
        record(id: any): any;
        Grid(): $mol_grid;
        Body(): $mol_grid;
    }
}
declare namespace $.$mol {
    interface $mol_app_taxon_data_row {
        KeyId: number;
    }
    class $mol_app_taxon extends $.$mol_app_taxon {
        hierarchy_uri(): string;
        hierarchy(): {
            [key: string]: $mol_grid_node;
        };
        data_uri(): string;
        data_resource(id: string): $mol_http;
        data_table(): {
            [id: string]: $mol_app_taxon_data_row;
        };
        record(id: string): $mol_app_taxon_data_row;
    }
}
declare namespace $ {
    class $mol_unit extends $mol_object {
        'valueOf()': number;
        constructor(value?: number);
        prefix(): string;
        postfix(): string;
        valueOf(): number;
        delimiter(): string;
        value_view(): string;
        toString(): string;
        static summ(a: $mol_unit, b: $mol_unit): any;
        mult(m: number): this;
    }
}
declare namespace $ {
    class $mol_unit_money extends $mol_unit {
    }
    class $mol_unit_money_usd extends $mol_unit_money {
        prefix(): string;
    }
    class $mol_unit_money_rur extends $mol_unit_money {
        postfix(): string;
    }
}
declare namespace $ {
    class $mol_time_base {
        static patterns: any;
        static formatter(pattern: string): any;
        toString(pattern: string): string;
    }
}
declare namespace $ {
    type $mol_time_duration_config = number | string | {
        year?: number;
        month?: number;
        day?: number;
        hour?: number;
        minute?: number;
        second?: number;
    };
    class $mol_time_duration extends $mol_time_base {
        constructor(config?: $mol_time_duration_config);
        readonly year: number;
        readonly month: number;
        readonly day: number;
        readonly hour: number;
        readonly minute: number;
        readonly second: number;
        summ(config: $mol_time_duration_config): $mol_time_duration;
        mult(numb: number): $mol_time_duration;
        valueOf(): number;
        toJSON(): string;
        toString(pattern?: string): string;
        static patterns: {
            '#Y': (duration: $mol_time_duration) => string;
            '#M': (duration: $mol_time_duration) => string;
            '#D': (duration: $mol_time_duration) => string;
            '#h': (duration: $mol_time_duration) => string;
            '#m': (duration: $mol_time_duration) => string;
            '#s': (duration: $mol_time_duration) => string;
            '+hh': (duration: $mol_time_duration) => string;
            'mm': (duration: $mol_time_duration) => string;
        };
    }
}
declare namespace $ {
    type $mol_time_moment_config = number | Date | string | {
        year?: number;
        month?: number;
        day?: number;
        hour?: number;
        minute?: number;
        second?: number;
        offset?: $mol_time_duration_config;
    };
    class $mol_time_moment extends $mol_time_base {
        constructor(config?: $mol_time_moment_config);
        readonly year: number;
        readonly month: number;
        readonly day: number;
        readonly hour: number;
        readonly minute: number;
        readonly second: number;
        readonly offset: $mol_time_duration;
        readonly weekday: number;
        private _native;
        readonly native: Date;
        private _normal;
        readonly normal: $mol_time_moment;
        merge(config: $mol_time_moment_config): $mol_time_moment;
        shift(config: $mol_time_duration_config): $mol_time_moment;
        toOffset(config: $mol_time_duration_config): $mol_time_moment;
        valueOf(): number;
        toJSON(): string;
        toString(pattern?: string): string;
        static patterns: {
            'YYYY': (moment: $mol_time_moment) => string;
            'AD': (moment: $mol_time_moment) => string;
            'YY': (moment: $mol_time_moment) => string;
            'Month': (moment: $mol_time_moment) => string;
            'DD Month': (moment: $mol_time_moment) => string;
            'D Month': (moment: $mol_time_moment) => string;
            'Mon': (moment: $mol_time_moment) => string;
            'DD Mon': (moment: $mol_time_moment) => string;
            'D Mon': (moment: $mol_time_moment) => string;
            '-MM': (moment: $mol_time_moment) => string;
            'MM': (moment: $mol_time_moment) => string;
            'M': (moment: $mol_time_moment) => string;
            'WeekDay': (moment: $mol_time_moment) => string;
            'WD': (moment: $mol_time_moment) => string;
            '-DD': (moment: $mol_time_moment) => string;
            'DD': (moment: $mol_time_moment) => string;
            'D': (moment: $mol_time_moment) => string;
            'Thh': (moment: $mol_time_moment) => string;
            'hh': (moment: $mol_time_moment) => string;
            'h': (moment: $mol_time_moment) => string;
            ':mm': (moment: $mol_time_moment) => string;
            'mm': (moment: $mol_time_moment) => string;
            'm': (moment: $mol_time_moment) => string;
            ':ss': (moment: $mol_time_moment) => string;
            'ss': (moment: $mol_time_moment) => string;
            's': (moment: $mol_time_moment) => string;
            '.sss': (moment: $mol_time_moment) => string;
            'sss': (moment: $mol_time_moment) => string;
            'Z': (moment: $mol_time_moment) => string;
        };
    }
}
declare namespace $ {
    function $mol_stub_select_random<Value>(list: Value[]): Value;
    function $mol_stub_strings(prefix?: string, count?: number, length?: number): any[];
    function $mol_stub_code(length?: number): string;
    function $mol_stub_price(max?: number): $mol_unit_money_usd;
    function $mol_stub_product_name(): string;
    function $mol_stub_company_name_big(): string;
    function $mol_stub_company_name_small(): string;
    function $mol_stub_company_name(): string;
    function $mol_stub_person_name(): string;
    function $mol_stub_city(): string;
    function $mol_stub_time(maxShift?: number): $mol_time_moment;
}
declare namespace $ {
    class $mol_app_taxon_demo extends $mol_app_taxon {
        hierarchy_field(): string;
    }
}
declare namespace $.$mol {
    class $mol_app_taxon_demo extends $.$mol_app_taxon_demo {
        hierarchy(): {
            [key: string]: $mol_grid_node;
        };
        record(path: number[]): {
            name: string;
            age: number;
            sex: string;
            sexPrefer: string;
            birthDay: string;
            birthCity: string;
            deathDay: string;
            deathCity: string;
            cityWork: string;
            company: string;
            phoneOS: string;
            fingersCount: number;
        };
    }
}
