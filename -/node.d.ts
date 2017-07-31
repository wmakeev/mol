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
declare var Proxy: any;
declare var require: (path: string) => any;
declare var $node: any;
declare namespace $ {
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
declare namespace $ {
    class $mol_view_selection extends $mol_object {
        static focused(next?: Element[], force?: $mol_atom_force): Element[];
        static position(...diff: any[]): any;
        static onFocus(event: FocusEvent): void;
        static onBlur(event: FocusEvent): void;
    }
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
    function $mol_const<Value>(value: Value): {
        (): Value;
        '()': Value;
    };
}
declare namespace $ {
    class $mol_file extends $mol_object {
        static absolute(path: string): $mol_file;
        static relative(path: string): $mol_file;
        path(): string;
        watcher(): any;
        stat(next?: any, force?: $mol_atom_force): any;
        version(): any;
        exists(next?: boolean): boolean;
        parent(): $mol_file;
        type(): "file" | "dir" | "blocks" | "chars" | "link" | "fifo" | "socket";
        name(): any;
        ext(): string;
        content(next?: string, force?: $mol_atom_force): any;
        reader(): any;
        writer(): any;
        sub(): $mol_file[];
        resolve(path: string): $mol_file;
        relate(base?: any): any;
        append(next: string): void;
        find(include?: RegExp, exclude?: RegExp): $mol_file[];
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
    class $mol_bar extends $mol_view {
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
    class $mol_icon_cross extends $mol_icon {
        path(): string;
    }
}
declare namespace $ {
    class $mol_pop extends $mol_view {
        showed(val?: any, force?: $mol_atom_force): any;
        Anchor(): any;
        align(): string;
        bubble_content(): any[];
        height_max(): number;
        Bubble(): $mol_pop_tip;
        sub(): any[];
    }
}
declare namespace $ {
    class $mol_pop_tip extends $mol_scroll {
        content(): any[];
        sub(): any[];
        height_max(): number;
        style(): {
            "maxHeight": number;
        };
        align(): string;
        attr(): {
            "mol_pop_align": string;
        };
    }
}
declare namespace $.$mol {
    class $mol_pop extends $.$mol_pop {
        sub(): any[];
        height_max(): number;
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
    class $mol_plugin extends $mol_view {
    }
}
declare namespace $.$mol {
    class $mol_plugin extends $.$mol_plugin {
        'dom_node()': Element;
        dom_node(): Element;
    }
}
declare namespace $ {
    class $mol_nav extends $mol_plugin {
        cycle(val?: any, force?: $mol_atom_force): any;
        keys_x(val?: any, force?: $mol_atom_force): any;
        keys_y(val?: any, force?: $mol_atom_force): any;
        current_x(val?: any, force?: $mol_atom_force): any;
        current_y(val?: any, force?: $mol_atom_force): any;
        event_up(event?: any, force?: $mol_atom_force): any;
        event_down(event?: any, force?: $mol_atom_force): any;
        event_left(event?: any, force?: $mol_atom_force): any;
        event_right(event?: any, force?: $mol_atom_force): any;
        event_key(event?: any, force?: $mol_atom_force): any;
        event(): {
            "keydown": (event?: any) => any;
        };
        attr(): {
            "mol_nav_x": any;
            "mol_nav_y": any;
        };
    }
}
declare namespace $.$mol {
    class $mol_nav extends $.$mol_nav {
        event_key(event?: KeyboardEvent): void;
        event_up(event?: KeyboardEvent): void;
        event_down(event?: KeyboardEvent): void;
        event_left(event?: KeyboardEvent): void;
        event_right(event?: KeyboardEvent): void;
        index_y(): any;
        index_x(): any;
    }
}
declare namespace $ {
    class $mol_icon_chevron extends $mol_icon {
        path(): string;
    }
}
declare namespace $ {
    class $mol_string extends $mol_view {
        dom_name(): string;
        enabled(): boolean;
        disabled(): boolean;
        value(val?: any, force?: $mol_atom_force): any;
        value_changed(val?: any, force?: $mol_atom_force): any;
        hint(): string;
        type(val?: any, force?: $mol_atom_force): any;
        field(): {
            "disabled": boolean;
            "value": any;
            "placeholder": string;
            "type": any;
        };
        event_change(event?: any, force?: $mol_atom_force): any;
        event_key_press(event?: any, force?: $mol_atom_force): any;
        event(): {
            "input": (event?: any) => any;
            "keypress": (event?: any) => any;
        };
    }
}
declare namespace $.$mol {
    class $mol_string extends $.$mol_string {
        _timer: number;
        event_change(next?: Event): void;
        event_key_press(next?: KeyboardEvent): void;
        disabled(): boolean;
    }
}
declare namespace $ {
    class $mol_list extends $mol_view {
        style(): {
            "minHeight": number;
        };
        rows(): any[];
        sub(): any[];
        Empty(): any;
    }
}
declare namespace $.$mol {
    class $mol_list extends $.$mol_list {
        sub(): any[];
        row_offsets(): number[];
        row_context(index: number): any;
        sub_visible(): any[];
        minimal_height(): number;
    }
}
declare namespace $ {
    class $mol_select extends $mol_view {
        dictionary(): {};
        options(): any[];
        value(val?: any, force?: $mol_atom_force): any;
        searchable(): boolean;
        search_breakpoint(): number;
        clearable(): boolean;
        event_select(id: any, event?: any, force?: $mol_atom_force): any;
        option_label(id: any): string;
        filter_pattern(val?: any, force?: $mol_atom_force): any;
        Option_label(id: any): $mol_dimmer;
        option_content(id: any): any[];
        option_content_super(id: any): any[];
        Option_row(id: any): $mol_button_minor;
        no_options_message(): string;
        No_options(): $mol_view;
        Clear_icon(): $mol_icon_cross;
        clear_option_message(): string;
        clear_option_content(): any[];
        Сlear_option_content(): $mol_view;
        nav_components(): any[];
        option_focused(component?: any, force?: $mol_atom_force): any;
        nav_cycle(val?: any, force?: $mol_atom_force): any;
        Nav(): $mol_nav;
        plugins(): any[];
        options_showed(val?: any, force?: $mol_atom_force): any;
        options_align(val?: any, force?: $mol_atom_force): any;
        event_showed_toggle(event?: any, force?: $mol_atom_force): any;
        Trigger_icon(): $mol_icon_chevron;
        value_content(): any[];
        trigger_content(): any[];
        Trigger(): $mol_button_minor;
        filter_hint(): string;
        Filter_string(): $mol_string;
        filter_content(): any[];
        option_rows(): any[];
        bubble_content(): any[];
        Bubble_content(): $mol_list;
        Pop(): $mol_pop;
        sub(): any[];
    }
}
declare namespace $.$mol {
    class $mol_select extends $.$mol_select {
        filter_pattern(next?: string): string;
        options_showed(val?: boolean): boolean;
        options(): string[];
        options_filtered(): string[];
        option_label(id: string): any;
        option_rows(): $mol_view[] | $mol_button_minor[];
        option_content_super(id: string): any[];
        option_focused(component: $mol_view): any;
        event_showed_toggle(event?: MouseEvent): void;
        event_select(id: string, event?: MouseEvent): void;
        searchable(): boolean;
        nav_components(): any[];
        bubble_content(): any[];
        value_content(): any[];
    }
}
declare namespace $ {
    class $mol_search extends $mol_bar {
        query(val?: any, force?: $mol_atom_force): any;
        suggest_selected(val?: any, force?: $mol_atom_force): any;
        hint(): string;
        suggests_showed(): boolean;
        suggests(): any[];
        Suggest(): $mol_search_suggest;
        Clear_icon(): $mol_icon_cross;
        event_clear(val?: any, force?: $mol_atom_force): any;
        Clear(): $mol_button_minor;
        sub(): any[];
    }
}
declare namespace $ {
    class $mol_search_suggest extends $mol_select {
        trigger_content(): any[];
        bubble_content(): any[];
        clearable(): boolean;
    }
}
declare namespace $.$mol {
    class $mol_search extends $.$mol_search {
        suggests_showed(): boolean;
        suggest_selected(next?: string): any;
        sub(): ($mol_button_minor | $mol_search_suggest)[];
        event_clear(event?: Event): void;
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
    interface $mol_syntax_token {
        name: string;
        found: string;
        chunks: string[];
    }
    class $mol_syntax {
        constructor(lexems: {
            [name: string]: RegExp;
        });
        'lexems()': {
            [name: string]: RegExp;
        };
        lexems(): {
            [name: string]: RegExp;
        };
        'rules()': {
            regExp: RegExp;
            name: string;
            size: number;
        }[];
        rules(): {
            regExp: RegExp;
            name: string;
            size: number;
        }[];
        'regExp()': RegExp;
        regExp(): RegExp;
        tokenize(text: string): $mol_syntax_token[];
    }
}
declare namespace $ {
    var $mol_syntax_md_flow: $mol_syntax;
    var $mol_syntax_md_line: $mol_syntax;
    const $mol_syntax_md_code: $mol_syntax;
}
declare namespace $ {
    class $mol_text extends $mol_list {
        uri_base(): string;
        text(): string;
        block_content(id: any): any[];
        block_type(id: any): string;
        Row(id: any): $mol_text_row;
        Span(id: any): $mol_text_span;
        Link(id: any): $mol_text_link;
        Image(id: any): $mol_text_image;
        header_level(id: any): number;
        header_content(id: any): any[];
        Header(id: any): $mol_text_header;
        table_head_cells(id: any): any[];
        table_rows(id: any): any[];
        Table(id: any): $mol_grid;
        table_cells(id: any): any[];
        Table_row(id: any): $mol_grid_row;
        table_cell_content(id: any): any[];
        Table_cell(id: any): $mol_grid_cell;
        Table_cell_head(id: any): $mol_float;
    }
}
declare namespace $ {
    class $mol_text_row extends $mol_view {
        minimal_height(): number;
        type(): string;
        attr(): {
            "mol_text_type": string;
        };
    }
}
declare namespace $ {
    class $mol_text_header extends $mol_view {
        dom_name(): string;
        minimal_height(): number;
        level(val?: any, force?: $mol_atom_force): any;
        attr(): {
            "mol_text_header_level": any;
        };
        content(): any[];
        sub(): any[];
    }
}
declare namespace $ {
    class $mol_text_span extends $mol_view {
        dom_name(): string;
        type(val?: any, force?: $mol_atom_force): any;
        attr(): {
            "mol_text_type": any;
        };
        content(val?: any, force?: $mol_atom_force): any;
        sub(): any;
    }
}
declare namespace $ {
    class $mol_text_link extends $mol_view {
        dom_name(): string;
        type(val?: any, force?: $mol_atom_force): any;
        link(val?: any, force?: $mol_atom_force): any;
        attr(): {
            "mol_text_type": any;
            "href": any;
        };
        content(val?: any, force?: $mol_atom_force): any;
        sub(): any;
    }
}
declare namespace $ {
    class $mol_text_image extends $mol_view {
        dom_name(): string;
        type(val?: any, force?: $mol_atom_force): any;
        link(val?: any, force?: $mol_atom_force): any;
        attr(): {
            "mol_text_type": any;
            "data": any;
        };
        title(val?: any, force?: $mol_atom_force): any;
        sub(): any[];
    }
}
declare namespace $.$mol {
    class $mol_text extends $.$mol_text {
        tokens_flow(): $mol_syntax_token[];
        rows(): ($.$mol_grid | $mol_text_row | $mol_text_header)[];
        header_level(index: number): number;
        header_content(index: number): ($mol_text_span | $mol_text_image)[];
        block_type(index: number): string;
        cell_contents(indexBlock: number): string[][];
        table_rows(blockId: number): $mol_grid_row[];
        table_head_cells(blockId: number): $.$mol_float[];
        table_cells(id: {
            block: number;
            row: number;
        }): $mol_grid_cell[];
        table_cell_content(id: {
            block: number;
            row: number;
            cell: number;
        }): ($mol_text_span | $mol_text_image)[];
        uri_base(): string;
        uri_resolve(uri: string): string;
        text2spans(prefix: string, text: string): ($mol_text_span | $mol_text_image)[];
        code2spans(prefix: string, text: string): $mol_text_span[];
        block_content(indexBlock: number): ($mol_view | string)[];
    }
}
declare namespace $ {
    class $mol_portion_indicator extends $mol_view {
        width_style(): string;
        style(): {
            "width": string;
        };
    }
}
declare namespace $ {
    class $mol_portion extends $mol_view {
        portion(): number;
        indicator_width_style(): string;
        indicator(): $mol_portion_indicator;
        sub(): any[];
    }
}
declare namespace $.$mol {
    class $mol_portion extends $.$mol_portion {
        indicator_width_style(): string;
    }
}
declare namespace $ {
    class $mol_icon_sort_asc extends $mol_icon {
        path(): string;
    }
}
declare var process: any;
declare namespace $ {
    class $mol_state_arg<Value> extends $mol_object {
        prefix: string;
        static href(next?: string): string;
        static dict(next?: {
            [key: string]: string;
        }): {
            [key: string]: any;
        };
        static value(key: string, next?: string): any;
        static link(next: any): string;
        static make_link(next: {
            [key: string]: any;
        }): string;
        constructor(prefix?: string);
        value(key: string, next?: string): any;
        sub(postfix: string): $mol_state_arg<{}>;
        link(next: {
            [key: string]: string;
        }): string;
    }
}
declare namespace $ {
    class $mol_bench extends $mol_grid {
        result(): any;
        result_sorted(): any;
        records(): any;
        col_sort(val?: any, force?: $mol_atom_force): any;
        event_sort_toggle(id: any, val?: any, force?: $mol_atom_force): any;
        col_head_label(id: any): any[];
        Col_head_sort(id: any): $mol_icon_sort_asc;
        col_head_content(id: any): any[];
        Col_head(id: any): $mol_bench_head;
        result_value(id: any): string;
        result_portion(id: any): number;
        Result_portion(id: any): $mol_portion;
        cell_content_number(id: any): any[];
    }
}
declare namespace $ {
    class $mol_bench_head extends $mol_float {
        event_click(val?: any, force?: $mol_atom_force): any;
        event(): {
            "click": (val?: any) => any;
        };
        hint(): string;
        attr(): {
            "title": string;
            "mol_float_scrolling": boolean;
        };
    }
}
declare namespace $.$mol {
    class $mol_bench extends $.$mol_bench {
        col_sort(next?: string): any;
        result_sorted(): any;
        result_value(id: {
            row: string[];
            col: string;
        }): any;
        result_number(id: {
            row: string[];
            col: string;
        }): number;
        result_value_max(col: string): number;
        result_portion(id: {
            row: string[];
            col: string;
        }): number;
        col_head_label(col: string): string[];
        event_sort_toggle(col: string, next?: Event): void;
        col_type(col: string): "text" | "number" | "branch";
        cell_content_number(id: {
            row: string[];
            col: string;
        }): any[];
        col_head_content(col: string): any[];
    }
}
declare namespace $ {
    class $mol_app_bench extends $mol_view {
        addon_title(): string;
        filter(val?: any, force?: $mol_atom_force): any;
        Filter(): $mol_search;
        menu_options(): any[];
        Menu(): $mol_list;
        Addon_page(): $mol_page;
        description(): string;
        Descr(): $mol_text;
        result(): any;
        result_col_title(id: any): any[];
        result_col_sort(val?: any, force?: $mol_atom_force): any;
        Result(): $mol_bench;
        Inform(): $mol_view;
        Sandbox(): $mol_view;
        Main_page(): $mol_page;
        sub(): any[];
        menu_option_checked(id: any, val?: any, force?: $mol_atom_force): any;
        menu_option_title(id: any): string;
        Menu_option(id: any): $mol_check_box;
        result_col_title_sample(): string;
    }
}
declare namespace $.$mol {
    class $mol_app_bench extends $.$mol_app_bench {
        bench(next?: string): any;
        sandbox(next?: HTMLIFrameElement, force?: $mol_atom_force): HTMLIFrameElement;
        'command_current()': any[];
        command_current(next?: any[], force?: $mol_atom_force): any[];
        command_result<Result>(command: any[], next?: Result): Result;
        meta(): {
            title: {
                [lang: string]: string;
            };
            descr: {
                [lang: string]: string;
            };
            samples: {
                [sample: string]: {
                    title: {
                        [lang: string]: string;
                    };
                };
            };
            steps: {
                [step: string]: {
                    title: {
                        [lang: string]: string;
                    };
                };
            };
        };
        samples_all(next?: string[]): string[];
        samples(next?: string[]): string[];
        steps(next?: string[]): string[];
        title(): string;
        description(): string;
        result_sample(sampleId: string): {
            [key: string]: any;
        };
        result(): {
            [sample: string]: {
                [step: string]: any;
            };
        };
        result_col_title(col_id: string): string[];
        result_col_sort(next?: string): any;
        menu_options(): $mol_check_box[];
        menu_option_title(sample: string): string;
        menu_option_checked(sample: string, next?: boolean): boolean;
    }
}
declare namespace $ {
    class $mol_plot_graph extends $mol_svg_group {
        series(): {};
        points_raw(): any[];
        points_scaled(): any[];
        points(): any[];
        threshold(): number;
        shift(): any[];
        scale(): any[];
        dimensions(): any[];
        dimensions_expanded(): any[];
        hue(): number;
        type(): string;
        attr(): {
            "mol_plot_graph_type": string;
        };
        color(): string;
        style(): {
            "color": string;
        };
        Sample(): any;
        front(): any[];
        back(): any[];
    }
}
declare namespace $ {
    class $mol_plot_graph_sample extends $mol_view {
        type(): string;
        attr(): {
            "mol_plot_graph_type": string;
        };
        color(): string;
        style(): {
            "color": string;
        };
    }
}
declare namespace $.$mol {
    class $mol_plot_graph extends $.$mol_plot_graph {
        points_raw(): any[][];
        points_scaled(): number[][];
        points(): number[][];
        dimensions(): number[][];
        color(): string;
        front(): this[];
    }
}
declare namespace $ {
    function $mol_math_round_expand(val: number, gap?: number): number;
}
declare namespace $ {
    class $mol_plot_ruler_vert extends $mol_plot_graph {
        front(): any[];
        color(): any;
        curve(): string;
        Curve(): $mol_svg_path;
        labels(): any[];
        title_pos_x(): string;
        title_pos_y(): string;
        title_pos(): any[];
        Title(): $mol_svg_text;
        sub(): any[];
        label_pos_x(index: any): string;
        label_pos_y(index: any): string;
        label_pos(index: any): any[];
        label_text(index: any): string;
        Label(index: any): $mol_svg_text;
    }
}
declare namespace $.$mol {
    class $mol_plot_ruler_vert extends $.$mol_plot_ruler_vert {
        dimensions(): number[][];
        step(): number;
        points_raw(): number[][];
        curve(): string;
        labels(): $.$mol_svg_text[];
        label_pos_y(index: number): string;
        label_text(index: number): string;
        back(): this[];
    }
}
declare namespace $ {
    class $mol_plot_ruler_hor extends $mol_plot_graph {
        front(): any[];
        color(): any;
        curve(): string;
        Curve(): $mol_svg_path;
        labels(): any[];
        title_pos_x(): string;
        title_pos_y(): string;
        title_pos(): any[];
        Title(): $mol_svg_text;
        sub(): any[];
        label_pos_x(index: any): string;
        label_pos_y(index: any): string;
        label_pos(index: any): any[];
        label_text(index: any): string;
        Label(index: any): $mol_svg_text;
    }
}
declare namespace $.$mol {
    class $mol_plot_ruler_hor extends $.$mol_plot_ruler_hor {
        count(): number;
        step(): number;
        keys_visible(): string[];
        points(): any[];
        curve(): string;
        labels(): $.$mol_svg_text[];
        label_pos_x(key: string): string;
        label_text(key: string): string;
        back(): this[];
    }
}
declare namespace $ {
    class $mol_state_time extends $mol_object {
        static now(precision?: number, next?: number, force?: $mol_atom_force): number;
    }
}
declare namespace $ {
    class $mol_meter extends $mol_view {
        width(val?: any, force?: $mol_atom_force): any;
        height(val?: any, force?: $mol_atom_force): any;
        left(val?: any, force?: $mol_atom_force): any;
        right(val?: any, force?: $mol_atom_force): any;
        bottom(val?: any, force?: $mol_atom_force): any;
        top(val?: any, force?: $mol_atom_force): any;
    }
}
declare namespace $.$mol {
    class $mol_meter extends $.$mol_meter {
        dom_node(): Element;
        rect(): ClientRect;
        top(): number;
        bottom(): number;
        left(): number;
        right(): number;
        width(): number;
        height(): number;
    }
}
declare namespace $ {
    class $mol_plot_pane extends $mol_svg_root {
        aspect(): string;
        hue_base(val?: any, force?: $mol_atom_force): any;
        hue_shift(val?: any, force?: $mol_atom_force): any;
        gap(): number;
        gap_hor(): number;
        gap_vert(): number;
        gap_left(): number;
        gap_right(): number;
        gap_top(): number;
        gap_bottom(): number;
        shift(): any[];
        scale(): any[];
        graphs(): any[];
        graphs_positioned(): any[];
        graphs_colored(): any[];
        graphs_sorted(): any[];
        sub(): any[];
        width(): any;
        height(): any;
        Meter(): $mol_meter;
        plugins(): any[];
    }
}
declare namespace $.$mol {
    class $mol_plot_pane extends $.$mol_plot_pane {
        dimensions(): number[][];
        size(): number[];
        dimensions_expanded(): number[][];
        size_expaned(): number[];
        graph_hue(index: number): number;
        graphs_colored(): any[];
        size_real(): any[];
        view_box(): string;
        scale(): number[];
        shift(): number[];
        graphs_positioned(): any[];
        graphs_sorted(): $mol_view[];
    }
}
declare namespace $ {
    class $mol_chart extends $mol_view {
        graphs(): any[];
        hue_base(): number;
        hue_shift(): number;
        Plot(): $mol_plot_pane;
        Legend(): $mol_chart_legend;
        sub(): any[];
    }
}
declare namespace $ {
    class $mol_chart_legend extends $mol_scroll {
        graphs(): any[];
        graph_legends(): any[];
        sub(): any[];
        Graph_sample(id: any): any;
        graph_title(id: any): string;
        Graph_title(id: any): $mol_view;
        Graph_legend(id: any): $mol_view;
    }
}
declare namespace $.$mol {
    class $mol_chart_legend extends $.$mol_chart_legend {
        graphs_front(): any[];
        graph_legends(): $mol_view[];
        graph_title(index: number): any;
        Graph_sample(index: number): any;
    }
}
declare namespace $ {
    class $mol_plot_bar extends $mol_plot_graph {
        stroke_width(): string;
        style(): {
            "stroke-width": string;
            "color": string;
        };
        curve(): string;
        Curve(): $mol_svg_path;
        sub(): any[];
        Sample(): $mol_plot_graph_sample;
    }
}
declare namespace $.$mol {
    class $mol_plot_bar extends $.$mol_plot_bar {
        curve(): string;
        stroke_width(): string;
        color(): string;
        dimensions(): number[][];
    }
}
declare namespace $ {
    class $mol_app_bench_chart_bar_mol extends $mol_view {
        Vert(): $mol_plot_ruler_vert;
        hor_series(): any[];
        Hor(): $mol_plot_ruler_hor;
        graphs(): any[];
        Chart(): $mol_chart;
        sub(): any[];
        graph_title(id: any): string;
        series(id: any): any[];
        Graph(id: any): $mol_plot_bar;
    }
}
declare namespace $.$mol {
    interface $mol_app_bench_chart_bar_mol_data {
        sample: string;
        graphs: number[][];
    }
    class $mol_app_bench_chart_bar_mol extends $.$mol_app_bench_chart_bar_mol {
        static data(next?: $mol_app_bench_chart_bar_mol_data, force?: $mol_atom_force): $mol_app_bench_chart_bar_mol_data;
        graphs(): $.$mol_plot_bar[];
        graph_title(id: number): string;
        series(id: number): number[];
        hor_series(): number[];
    }
}
declare namespace $ {
    class $mol_plot_line extends $mol_plot_graph {
        color_fill(): string;
        curve(): string;
        Curve(): $mol_svg_path;
        sub(): any[];
        Sample(): $mol_plot_graph_sample;
    }
}
declare namespace $.$mol {
    class $mol_plot_line extends $.$mol_plot_line {
        curve(): string;
    }
}
declare namespace $ {
    class $mol_plot_dot extends $mol_plot_graph {
        curve(): string;
        Curve(): $mol_svg_path;
        sub(): any[];
        Sample(): $mol_plot_graph_sample;
    }
}
declare namespace $.$mol {
    class $mol_plot_dot extends $.$mol_plot_dot {
        curve(): string;
    }
}
declare namespace $ {
    class $mol_plot_group extends $mol_plot_graph {
        graphs(): any[];
        graphs_enriched(): any[];
        sub(): any[];
        graph_samples(): any[];
        Sample(): $mol_plot_graph_sample;
    }
}
declare namespace $.$mol {
    class $mol_plot_group extends $.$mol_plot_group {
        graphs_enriched(): any[];
        graph_samples(): any[];
        back(): $mol_view[];
        front(): $mol_view[];
    }
}
declare namespace $ {
    class $mol_app_bench_chart_rope_mol extends $mol_view {
        Vert(): $mol_plot_ruler_vert;
        hor_series(): any[];
        Hor(): $mol_plot_ruler_hor;
        graphs(): any[];
        Chart(): $mol_chart;
        sub(): any[];
        graph_title(id: any): string;
        series(id: any): any[];
        Line(id: any): $mol_plot_line;
        Dots(id: any): $mol_plot_dot;
        Graph(id: any): $mol_plot_group;
    }
}
declare namespace $.$mol {
    interface $mol_app_bench_chart_rope_mol_data {
        sample: string;
        graphs: number[][];
    }
    class $mol_app_bench_chart_rope_mol extends $.$mol_app_bench_chart_rope_mol {
        static data(next?: $mol_app_bench_chart_rope_mol_data, force?: $mol_atom_force): $mol_app_bench_chart_rope_mol_data;
        graphs(): $.$mol_plot_group[];
        graph_title(id: number): string;
        series(id: number): number[];
        hor_series(): number[];
    }
}
declare namespace $ {
    class $mol_app_bench_list_mol extends $mol_scroll {
        sample(): string;
        Head(): $mol_view;
        rows(): any[];
        List(): $mol_list;
        sub(): any[];
        row_selected(id: any, val?: any, force?: $mol_atom_force): any;
        row_title(id: any): string;
        row_content(id: any): string;
        Row(id: any): $mol_app_bench_list_mol_row;
    }
}
declare namespace $ {
    class $mol_app_bench_list_mol_row extends $mol_check {
        selected(val?: any, force?: $mol_atom_force): any;
        minimal_height(): number;
        title(): string;
        Title(): $mol_view;
        content(): string;
        Content(): $mol_view;
        sub(): any[];
    }
}
declare namespace $.$mol {
    interface $mol_app_bench_list_mol_data {
        sample: string;
        items: {
            id: number;
            title: string;
            content: string;
        }[];
    }
    class $mol_app_bench_list_mol extends $.$mol_app_bench_list_mol {
        static data(next?: $mol_app_bench_list_mol_data, force?: $mol_atom_force): $mol_app_bench_list_mol_data;
        sample(): string;
        items(): {
            id: number;
            title: string;
            content: string;
        }[];
        rows(): $mol_app_bench_list_mol_row[];
        row_title(id: number): string;
        row_content(id: number): string;
        row_selected(id: number, next?: boolean): boolean;
        selected_id(next?: number): number;
    }
}
declare namespace JSX {
    interface Element extends HTMLElement {
    }
    interface ElementClass extends HTMLElement {
    }
    interface IntrinsicElements {
        a: any;
        abbr: any;
        address: any;
        area: any;
        article: any;
        aside: any;
        audio: any;
        b: any;
        base: any;
        bdi: any;
        bdo: any;
        big: any;
        blockquote: any;
        body: any;
        br: any;
        button: any;
        canvas: any;
        caption: any;
        cite: any;
        code: any;
        col: any;
        colgroup: any;
        data: any;
        datalist: any;
        dd: any;
        del: any;
        details: any;
        dfn: any;
        dialog: any;
        div: any;
        dl: any;
        dt: any;
        em: any;
        embed: any;
        fieldset: any;
        figcaption: any;
        figure: any;
        footer: any;
        form: any;
        h1: any;
        h2: any;
        h3: any;
        h4: any;
        h5: any;
        h6: any;
        head: any;
        header: any;
        hgroup: any;
        hr: any;
        html: any;
        i: any;
        iframe: any;
        img: any;
        input: any;
        ins: any;
        kbd: any;
        keygen: any;
        label: any;
        legend: any;
        li: any;
        link: any;
        main: any;
        map: any;
        mark: any;
        menu: any;
        menuitem: any;
        meta: any;
        meter: any;
        nav: any;
        noindex: any;
        noscript: any;
        object: any;
        ol: any;
        optgroup: any;
        option: any;
        output: any;
        p: any;
        param: any;
        picture: any;
        pre: any;
        progress: any;
        q: any;
        rp: any;
        rt: any;
        ruby: any;
        s: any;
        samp: any;
        script: any;
        section: any;
        select: any;
        small: any;
        source: any;
        span: any;
        strong: any;
        style: any;
        sub: any;
        summary: any;
        sup: any;
        table: any;
        tbody: any;
        td: any;
        textarea: any;
        tfoot: any;
        th: any;
        thead: any;
        time: any;
        title: any;
        tr: any;
        track: any;
        u: any;
        ul: any;
        var: any;
        video: any;
        wbr: any;
    }
}
declare namespace $ {
    function $mol_dom_jsx(localName: string, props: {
        [key: string]: any;
    }, ...children: Array<Node | string>): Element;
}
declare namespace $ {
    class $mol_app_bench_list_tsx {
        static data: {
            sample: string;
            items: {
                id: number;
                title: string;
                content: string;
            }[];
        };
        static selected: number;
        static onClick(item: {
            id: number;
        }, event: MouseEvent): void;
        static render(): JSX.Element;
    }
}
declare namespace $ {
    class $mol_touch extends $mol_plugin {
        start_zoom(val?: any, force?: $mol_atom_force): any;
        start_distance(val?: any, force?: $mol_atom_force): any;
        zoom(val?: any, force?: $mol_atom_force): any;
        start_pos(val?: any, force?: $mol_atom_force): any;
        swipe_precision(): number;
        swipe_right(val?: any, force?: $mol_atom_force): any;
        swipe_bottom(val?: any, force?: $mol_atom_force): any;
        swipe_left(val?: any, force?: $mol_atom_force): any;
        swipe_top(val?: any, force?: $mol_atom_force): any;
        event_start(event?: any, force?: $mol_atom_force): any;
        event_move(event?: any, force?: $mol_atom_force): any;
        event_end(event?: any, force?: $mol_atom_force): any;
        event(): {
            "touchstart": (event?: any) => any;
            "touchmove": (event?: any) => any;
            "touchend": (event?: any) => any;
        };
    }
}
declare namespace $.$mol {
    class $mol_touch extends $.$mol_touch {
        event_start(event?: TouchEvent): void;
        event_move(event?: TouchEvent): void;
        event_end(event?: TouchEvent): void;
    }
}
declare namespace $ {
    class $mol_ghost extends $mol_view {
        Sub(): $mol_view;
    }
}
declare namespace $.$mol {
    class $mol_ghost extends $.$mol_ghost {
        dom_node(): Element;
        render(): void;
    }
}
declare namespace $ {
    class $mol_book extends $mol_view {
        pages_wrapped(): any[];
        sub(): any[];
        pages(): any[];
        width(): any;
        Meter(): $mol_meter;
        event_front_up(val?: any, force?: $mol_atom_force): any;
        event_front_down(val?: any, force?: $mol_atom_force): any;
        Touch(): $mol_touch;
        plugins(): any[];
        page(index: any): any;
        page_visible(index: any): boolean;
        Page(index: any): $mol_book_page;
        Placeholder(): $mol_book_placeholder;
    }
}
declare namespace $ {
    class $mol_book_placeholder extends $mol_scroll {
        minimal_width(): number;
        attr(): {
            "tabindex": any;
        };
        sub(): any[];
    }
}
declare namespace $ {
    class $mol_book_page extends $mol_ghost {
        visible(): boolean;
        attr(): {
            "tabindex": number;
            "mol_book_page_focused": boolean;
            "mol_book_page_visible": boolean;
        };
    }
}
declare namespace $.$mol {
    class $mol_book extends $.$mol_book {
        pages_extended(): $mol_view[];
        break_point(): number;
        page(index: number): $mol_view;
        page_visible(index: number): boolean;
        pages_wrapped(): $mol_view[];
        title(): string;
        event_front_up(event?: Event): void;
        event_front_down(event?: Event): void;
    }
}
declare namespace $ {
    class $mol_row extends $mol_view {
        style(): {
            "minHeight": number;
        };
    }
}
declare namespace $ {
    class $mol_row_sub extends $mol_view {
    }
}
declare namespace $.$mol {
    class $mol_row extends $.$mol_row {
        item_offsets_top(): number[];
        sub_visible(): (string | number | boolean | Node | $mol_view)[];
        minimal_height(): number;
    }
}
declare namespace $ {
    class $mol_status extends $mol_view {
        status(): any;
        minimal_height(): number;
        minimal_width(): number;
        message(): string;
        sub(): any[];
    }
}
declare namespace $.$mol {
    class $mol_status extends $.$mol_status {
        message(): any;
    }
}
declare namespace $ {
    class $mol_icon_source extends $mol_icon {
        path(): string;
    }
}
declare namespace $ {
    class $mol_link extends $mol_view {
        minimal_height(): number;
        dom_name(): string;
        uri(): string;
        hint(): string;
        target(): string;
        current(): boolean;
        attr(): {
            "href": string;
            "title": string;
            "target": string;
            "mol_link_current": boolean;
        };
        sub(): any[];
        arg(): {};
        event_click(val?: any, force?: $mol_atom_force): any;
        event(): {
            "click": (val?: any) => any;
        };
    }
}
declare namespace $.$mol {
    class $mol_link extends $.$mol_link {
        uri(): string;
        current(): boolean;
    }
}
declare namespace $ {
    class $mol_demo extends $mol_view {
        name(): string;
        title(): string;
        Title(): $mol_link;
        Head(): $mol_view;
        widget(): any;
        Screen(): $mol_view;
        sub(): any[];
    }
}
declare namespace $.$mol {
    class $mol_demo extends $.$mol_demo {
        widget(): $mol_view;
        title(): string;
    }
}
declare namespace $ {
    class $mol_demo_small extends $mol_demo {
        height(): number;
        minimal_height(): number;
        width(): number;
        minimal_width(): number;
    }
}
declare namespace $.$mol {
    class $mol_demo_small extends $.$mol_demo_small {
        context_sub(): $mol_view_context;
    }
}
declare namespace $ {
    class $mol_demo_large extends $mol_demo {
    }
}
declare namespace $ {
    class $mol_app_demo extends $mol_book {
        title(): string;
        source_prefix(): string;
        Placeholder(): $mol_app_demo_placeholder;
        nav_hierarchy(): any;
        nav_option(id: any): any;
        filter_string(val?: any, force?: $mol_atom_force): any;
        Menu(): $mol_app_demo_menu;
        source_link(): string;
        main_content(): any[];
        Detail(): $mol_app_demo_detail;
        blocks(): any[];
        pages(): any[];
        welcome_text(): string;
        Welcome_text(): $mol_text;
        Welcome(): $mol_scroll;
        Samples(): any[];
        Detail_row(): $mol_row;
        detail_empty_prefix(): string;
        selected(): string;
        detail_empty_postfix(): string;
        Detail_empty_message(): $mol_status;
    }
}
declare namespace $ {
    class $mol_app_demo_menu extends $mol_page {
        minimal_width(): number;
        title(): string;
        filter(val?: any, force?: $mol_atom_force): any;
        Filter(): $mol_search;
        tools(): any[];
        hierarchy(): any;
        option(id: any): any;
        event_navigate(val?: any, force?: $mol_atom_force): any;
        Nav(): $mol_app_demo_nav;
        Body(): $mol_app_demo_nav;
    }
}
declare namespace $ {
    class $mol_app_demo_detail extends $mol_page {
        Source_icon(): $mol_icon_source;
        source_link(): string;
        Source_link(): $mol_link;
        Close_icon(): $mol_icon_cross;
        close_arg(): {
            "demo": any;
        };
        Close(): $mol_link;
        tools(): any[];
    }
}
declare namespace $ {
    class $mol_app_demo_nav extends $mol_grid {
        row_height(): number;
        hierarchy_col(): string;
        Head(): any;
        arg(id: any): {};
        event_navigate(val?: any, force?: $mol_atom_force): any;
        Expand(id: any): $mol_check_expand;
        Content(id: any): $mol_view;
        Chevron(id: any): $mol_icon_chevron;
        Option(id: any): $mol_link;
    }
}
declare namespace $.$mol {
    class $mol_app_demo extends $.$mol_app_demo {
        title(): string;
        names_demo_all(): string[];
        names_demo_filtered(): string[];
        nav_hierarchy(): {
            [prefix: string]: $mol_grid_node;
        };
        nav_option(id: string): {
            title: string;
        };
        selected(): any;
        widget(name: string): $mol_view;
        names_demo(): string[];
        blocks(): $mol_view[];
        Placeholder(): $mol_app_demo_placeholder;
        main_content(): $.$mol_status[] | $mol_demo_large[] | $.$mol_row[];
        Samples(): $mol_demo_small[];
        Sample_small(name: string): $mol_demo_small;
        Sample_large(name: string): $mol_demo_large;
        logo_uri(): string;
        source_link(): string;
    }
    class $mol_app_demo_nav extends $.$mol_app_demo_nav {
        Cell(id: {
            row: string[];
            col: string;
        }): $mol_view;
        arg(id: {
            row: string[];
            col: string;
        }): {
            'demo': string;
        };
    }
}
declare namespace $ {
    class $mol_image extends $mol_view {
        dom_name(): string;
        uri(): string;
        field(): {
            "src": string;
            "alt": string;
        };
    }
}
declare namespace $ {
    class $mol_link_iconed extends $mol_link {
        icon(): string;
        Icon(): $mol_image;
        title(): string;
        content(): any[];
        sub(): any[];
        host(): string;
    }
}
declare namespace $.$mol {
    class $mol_link_iconed extends $.$mol_link_iconed {
        icon(): string;
        host(): string;
        title(): string;
    }
}
declare namespace $ {
    class $mol_card extends $mol_list {
        status(): string;
        attr(): {
            "mol_card_status_type": string;
        };
        content(): any[];
        Content(): $mol_view;
        status_text(): string;
        Status(): $mol_view;
        rows(): any[];
    }
}
declare namespace $.$mol {
    class $mol_card extends $.$mol_card {
        rows(): $mol_view[];
    }
}
declare namespace $ {
    class $mol_app_demo_placeholder extends $mol_book_placeholder {
        title(): string;
        Title(): $mol_view;
        description(): string;
        Description(): $mol_view;
        technology(): string;
        Technology(): $mol_app_placeholder_advantage;
        code_rate(): string;
        Code(): $mol_app_placeholder_advantage;
        programming(): string;
        Programming(): $mol_app_placeholder_advantage;
        Advantages(): $mol_view;
        Github_link(): $mol_link_iconed;
        Content(): $mol_card;
        sub(): any[];
    }
}
declare namespace $ {
    class $mol_app_placeholder_advantage extends $mol_view {
        image(): string;
        Image(): $mol_image;
        title(): string;
        sub(): any[];
    }
}
declare namespace $ {
    class $mol_icon_folder extends $mol_icon {
        path(): string;
    }
}
declare namespace $ {
    class $mol_icon_file2 extends $mol_icon {
        path(): string;
    }
}
declare namespace $ {
    class $mol_embed extends $mol_ghost {
        uri(): string;
        Pdf(): $mol_embed_pdf;
        mime(): string;
        Native(): $mol_embed_native;
    }
}
declare namespace $.$mol {
    class $mol_embed extends $.$mol_embed {
        Sub(): $.$mol_embed_pdf | $mol_embed_native;
    }
}
declare namespace $ {
    class $mol_embed_native extends $mol_view {
        dom_name(): string;
        uri(): string;
        mime(): string;
        attr(): {
            "data": string;
            "type": string;
        };
        open_label(): string;
        Open_button(): $mol_button_major;
        Open(): $mol_link;
        sub(): any[];
    }
}
declare namespace $ {
    let $lib_pdfjs: any;
}
declare namespace $ {
    function $mol_range_in<Item>(source: {
        item: (id: number) => Item;
        length: number;
    }): Item[];
    class $mol_range_common<Value> {
        item(id: number): Value;
        length: number;
        readonly '0': Value;
        forEach(handle: (value?: Value, id?: number) => void): void;
        valueOf(): Value[];
        concat(...args: any[]): Value[];
        slice(start?: number, end?: number): $mol_range_lazy<Value>;
        map<ResValue>(proceed: (val: Value, id?: number) => ResValue): $mol_range_lazy<ResValue>;
        join(delim?: string): string;
        every(check: (value: Value, id: number) => boolean): boolean;
        some(check: (value: Value, id: number) => boolean): boolean;
    }
    class $mol_range_lazy<Value> extends $mol_range_common<Value> {
        private source;
        constructor(source?: {
            item(id: number): Value;
            length: number;
        });
        item(id: number): Value;
        readonly length: number;
    }
}
declare namespace $ {
    class $mol_embed_pdf extends $mol_scroll {
        uri(): string;
        pages(): any[];
        Pages(): $mol_list;
        sub(): any[];
        page(index: any): any;
        Page(index: any): $mol_embed_pdf_page;
    }
}
declare namespace $ {
    class $mol_embed_pdf_page extends $mol_view {
        dom_name(): string;
        page(): any;
        max_width(): number;
        scale_over(): number;
        scale(val?: any, force?: $mol_atom_force): any;
        Touch(): $mol_touch;
        plugins(): any[];
        zoom(): number;
        style(): {
            "zoom": number;
        };
        width(): number;
        height(): number;
        field(): {
            "width": number;
            "height": number;
        };
    }
}
declare namespace $.$mol {
    class $mol_embed_pdf extends $.$mol_embed_pdf {
        document(doc?: any, force?: $mol_atom_force): any;
        page(index: number, page?: any, force?: $mol_atom_force): any;
        pages(): any[];
    }
    class $mol_embed_pdf_page extends $.$mol_embed_pdf_page {
        viewport(): any;
        zoom(): number;
        width(): number;
        height(): number;
        minimal_width(): number;
        minimal_height(): number;
        paint(next?: any, force?: $mol_atom_force): any;
        render(): void;
    }
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
    class $mol_webdav extends $mol_http {
        static item(uri: string): $mol_webdav;
        data_tree(): {
            [uri: string]: Element;
        };
        data_self(): {
            [uri: string]: Element;
        };
        parent(): $mol_webdav;
        sub(): $mol_webdav[];
        depth(): number;
        headers(): {
            'Depth': string;
        };
        method_get(): string;
        resolve(uri: string): $mol_webdav;
        prop(prop: string): string;
        type(): "file" | "dir";
    }
}
declare namespace $ {
    class $mol_app_files extends $mol_book {
        uri_root_default(): string;
        uri_root(): string;
        uri_current(): string;
        credentials(): {
            "login": string;
            "password": string;
        };
        title_root(): string;
        title(): string;
        webdav_title(folder: any): string;
        webdav_description(folder: any): string;
        folder_rows(folder: any): any[];
        Folder(folder: any): $mol_app_files_folder;
        folder_row_arg(uri: any): {};
        folder_row_current(uri: any): boolean;
        folder_row_icon(uri: any): any;
        folder_row_descr(uri: any): string;
        Folder_row_descr(uri: any): $mol_view;
        folder_row_title(uri: any): string;
        Folder_row_title(uri: any): $mol_view;
        Folder_row_info(uri: any): $mol_view;
        Folder_row(uri: any): $mol_link;
        file_uri(file: any): string;
        file_mime(file: any): string;
        File(file: any): $mol_app_files_file;
        Icon_folder(uri: any): $mol_icon_folder;
        Icon_file(uri: any): $mol_icon_file2;
        Placeholder(): $mol_book_placeholder;
        tools_root(): any[];
        Close_icon(uri: any): $mol_icon_cross;
        close_arg(uri: any): {};
        Close(uri: any): $mol_link;
        page_tools(uri: any): any[];
    }
}
declare namespace $ {
    class $mol_app_files_folder extends $mol_page {
        minimal_width(): number;
        description(): string;
        Description(): $mol_text;
        rows(): any[];
        Folder_rows(): $mol_list;
        body(): any[];
    }
}
declare namespace $ {
    class $mol_app_files_file extends $mol_page {
        minimal_width(): number;
        src(): string;
        mime(): string;
        Embed(): $mol_embed;
        body(): any[];
    }
}
declare namespace $.$mol {
    class $mol_app_files extends $.$mol_app_files {
        pages(): ($.$mol_app_files_folder | $mol_app_files_file)[];
        uri_root(next?: string): any;
        uri_current(next?: string): any;
        root(): $mol_webdav;
        current(): $mol_webdav;
        webdav(uri: string): $mol_webdav;
        folder_row_current(uri: string): boolean;
        webdavs(): $mol_webdav[];
        webdav_type(uri: string): "file" | "dir";
        webdav_title(uri: string): string;
        folder_rows(uri: string): $.$mol_link[];
        folder_row_arg(uri: string): {
            'current': string;
        };
        folder_row_icon(uri: string): $mol_icon_folder;
        folder_row_title(uri: string): string;
        folder_row_descr(uri: string): string;
        file_uri(uri: string): string;
        file_mime(uri: string): string;
        file_size(uri: string): number;
        title(): string;
        page_tools(uri: string): any[];
        close_arg(uri: string): {
            'current': string;
        };
    }
    class $mol_app_files_folder extends $.$mol_app_files_folder {
        body(): $.$mol_list[];
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
    class $mol_app_files_demo extends $mol_app_files {
        title_root(): string;
        uri_root_default(): string;
    }
}
declare namespace $.$mol {
    class $mol_app_files_demo extends $.$mol_app_files_demo {
        folder_rows(uri: string): any[];
    }
}
declare namespace $ {
    class $mol_app_habhub extends $mol_book {
        Placeholder(): $mol_book_placeholder;
        title_default(): string;
        menu_rows(): any[];
        Menu(): $mol_list;
        Menu_page(): $mol_page;
        gist_current_title(): string;
        close_arg(): {
            "gist": any;
        };
        Close_icon(): $mol_icon_cross;
        Close(): $mol_link;
        details_scroll_top(val?: any, force?: $mol_atom_force): any;
        gist_current_content(): string;
        Datails_text(): $mol_text;
        Details(): $mol_page;
        pages(): any[];
        gist_title(id: any): string;
        gist_arg(id: any): {};
        Menu_row(id: any): $mol_link;
    }
}
declare namespace $.$mol {
    interface $mol_app_habhub_gist {
        id: number;
        title: string;
        body: string;
    }
    class $mol_app_habhub extends $.$mol_app_habhub {
        uriSource(): string;
        gists(): $mol_app_habhub_gist[];
        gists_dict(): {
            [key: string]: $mol_app_habhub_gist;
        };
        gist(id: number): $mol_app_habhub_gist;
        gist_current_id(): number;
        pages(): $.$mol_page[];
        Placeholder(): $mol_book_placeholder;
        menu_rows(): $mol_view[];
        gist_title(id: number): string;
        gist_arg(id: number): {
            gist: number;
        };
        gist_current_title(): string;
        gist_current_content(): string;
        details_scroll_top(next?: number): number;
    }
}
declare namespace $ {
    class $mol_app_habhub_demo extends $mol_app_habhub {
        title(): string;
    }
}
declare namespace $ {
    class $mol_app_hello extends $mol_view {
        name_hint(): string;
        name(val?: any, force?: $mol_atom_force): any;
        Name(): $mol_string;
        greeting(): string;
        Greeting(): $mol_view;
        sub(): any[];
    }
}
declare namespace $.$mol {
    class $mol_app_hello extends $.$mol_app_hello {
        greeting(): string;
    }
}
declare namespace $ {
    class $mol_app_hello_demo extends $mol_app_hello {
        title(): string;
    }
}
declare namespace $ {
    class $mol_app_inventory extends $mol_view {
        domain(): $mol_app_inventory_domain;
        Page(): any;
        sub(): any[];
        can_write_off(): boolean;
        can_approve(): boolean;
        Head(): $mol_app_inventory_head;
        Enter(): $mol_app_inventory_enter;
        Controller(): $mol_app_inventory_controller;
        Keeper(): $mol_app_inventory_keeper;
        Stats(): $mol_app_inventory_stats;
    }
}
declare namespace $ {
    class $mol_app_inventory_head extends $mol_row {
        keeper_show(): boolean;
        control_show(): boolean;
        keeper_label(): string;
        Keeper_link(): $mol_link;
        control_label(): string;
        Control_link(): $mol_link;
        stats_label(): string;
        Stats_link(): $mol_link;
        sub(): any[];
    }
}
declare namespace $.$mol {
    class $mol_app_inventory extends $.$mol_app_inventory {
        Page(): $mol_view;
        page_name(next?: string): any;
        can_write_off(): boolean;
        can_approve(): boolean;
    }
    class $mol_app_inventory_head extends $.$mol_app_inventory_head {
        sub(): $.$mol_link[];
    }
}
declare namespace $ {
    class $mol_app_inventory_stats extends $mol_page {
        domain(): $mol_app_inventory_domain;
    }
}
declare namespace $ {
    class $mol_icon_minus extends $mol_icon {
        path(): string;
    }
}
declare namespace $ {
    class $mol_icon_plus extends $mol_icon {
        path(): string;
    }
}
declare namespace $ {
    class $mol_number extends $mol_bar {
        precision(): number;
        precision_view(): number;
        precision_change(): number;
        value(val?: any, force?: $mol_atom_force): any;
        event_wheel(val?: any, force?: $mol_atom_force): any;
        event_async(): {
            "wheel": (val?: any) => any;
        };
        event_dec(val?: any, force?: $mol_atom_force): any;
        enabled(): boolean;
        dec_enabled(): boolean;
        dec_icon(): $mol_icon_minus;
        Dec(): $mol_button_minor;
        value_string(val?: any, force?: $mol_atom_force): any;
        hint(): string;
        string_enabled(): boolean;
        String(): $mol_string;
        event_inc(val?: any, force?: $mol_atom_force): any;
        inc_enabled(): boolean;
        inc_icon(): $mol_icon_plus;
        Inc(): $mol_button_minor;
        sub(): any[];
    }
}
declare namespace $.$mol {
    class $mol_number extends $.$mol_number {
        event_dec(next?: Event): void;
        event_inc(next?: Event): void;
        value_string(next?: string): any;
        event_wheel(next?: MouseWheelEvent): void;
    }
}
declare namespace $ {
    class $mol_switch extends $mol_view {
        minimal_height(): number;
        option_checked(id: any, val?: any, force?: $mol_atom_force): any;
        option_title(id: any): string;
        enabled(): boolean;
        option_enabled(id: any): boolean;
        Option(id: any): $mol_check;
        value(val?: any, force?: $mol_atom_force): any;
        options(): {};
        items(): any[];
        sub(): any[];
    }
}
declare namespace $.$mol {
    class $mol_switch extends $.$mol_switch {
        value(next?: any): any;
        options(): {
            [key: string]: string;
        };
        items(): $.$mol_check[];
        option_title(key: string): string;
        option_checked(key: string, next?: boolean): boolean;
    }
}
declare namespace $ {
    class $mol_app_inventory_position extends $mol_row {
        position(): any;
        title(): string;
        Title(): $mol_view;
        description(): string;
        Description(): $mol_view;
        Product(): $mol_view;
        count_editable(): boolean;
        count(val?: any, force?: $mol_atom_force): any;
        Count(): $mol_number;
        status(val?: any, force?: $mol_atom_force): any;
        status_label_pending(): string;
        status_label_approved(): string;
        status_label_rejected(): string;
        Status(): $mol_switch;
        sub(): any[];
    }
}
declare namespace $.$mol {
    class $mol_app_inventory_position extends $.$mol_app_inventory_position {
        position(): $mol_app_inventory_domain_position;
        title(): string;
        description(): string;
        count(next?: number): number;
        status(next?: keyof typeof $mol_app_inventory_domain_position_status): "pending" | "completed" | "draft" | "approved" | "rejected";
    }
}
declare var cordova: any;
declare namespace $ {
    var $mol_cordova: any;
    function $mol_cordova_camera(): any;
}
declare namespace $ {
    class $mol_code extends $mol_view {
        value(val?: any, force?: $mol_atom_force): any;
        format(): string;
        hint(): string;
        Manual(): $mol_search;
        event_scan(val?: any, force?: $mol_atom_force): any;
        scan_label(): string;
        Scan(): $mol_button;
        sub(): any[];
    }
}
declare namespace $.$mol {
    class $mol_code extends $.$mol_code {
        scan_support(): boolean;
        Scan(): $.$mol_button;
        event_scan(): void;
    }
}
declare namespace $ {
    class $mol_app_inventory_keeper extends $mol_page {
        domain(): $mol_app_inventory_domain;
        position_rows(): any[];
        body(): any[];
        position(id: any): any;
        Position_row(id: any): $mol_app_inventory_position;
        code_new(val?: any, force?: $mol_atom_force): any;
        code_new_hint(): string;
        Code(): $mol_code;
        event_submit(event?: any, force?: $mol_atom_force): any;
        submit_label(): string;
        Submit(): $mol_button_major;
        Action_row(): $mol_row;
        foot(): any[];
    }
}
declare namespace $.$mol {
    class $mol_app_inventory_keeper extends $.$mol_app_inventory_keeper {
        position(id: string): $mol_app_inventory_domain_position;
        code_new(next?: string): string;
        position_rows(): $.$mol_app_inventory_position[];
        positions(): $mol_app_inventory_domain_position[];
        event_submit(next?: Event): void;
    }
}
declare namespace $ {
    class $mol_app_inventory_controller extends $mol_page {
        domain(): $mol_app_inventory_domain;
        position_rows(): any[];
        body(): any[];
        position(id: any): any;
        Position_row(id: any): $mol_app_inventory_position;
        event_sweep(event?: any, force?: $mol_atom_force): any;
        submit_label(): string;
        Sweep(): $mol_button_major;
        Controls_row(): $mol_row;
        foot(): any[];
    }
}
declare namespace $.$mol {
    class $mol_app_inventory_controller extends $.$mol_app_inventory_controller {
        position(id: string): $mol_app_inventory_domain_position;
        position_rows(): $.$mol_app_inventory_position[];
        positions(): $mol_app_inventory_domain_position[];
        event_sweep(next?: Event): void;
    }
}
declare namespace $ {
    class $mol_form extends $mol_view {
        submit_blocked(): boolean;
        form_fields(): any[];
        Bar_fields(): $mol_view;
        buttons(): any[];
        Bar_buttons(): $mol_row;
        sub(): any[];
    }
}
declare namespace $.$mol {
    class $mol_form extends $.$mol_form {
        submit_blocked(): boolean;
    }
}
declare namespace $ {
    class $mol_labeler extends $mol_view {
        dom_name(): string;
        label(): any[];
        Title(): $mol_view;
        content(): any;
        Content(): $mol_view;
        sub(): any[];
    }
}
declare namespace $ {
    class $mol_form_field extends $mol_labeler {
        name(): string;
        errors(): any[];
        Bid(): $mol_view;
        label(): any[];
        control(): any;
        Content(): any;
    }
}
declare namespace $ {
    class $mol_app_inventory_enter extends $mol_view {
        domain(): $mol_app_inventory_domain;
        entered(val?: any, force?: $mol_atom_force): any;
        loginLabel(): string;
        loginErrors(): any[];
        login(val?: any, force?: $mol_atom_force): any;
        loginControl(): $mol_string;
        loginField(): $mol_form_field;
        passwordLabel(): string;
        passwordErrors(): any[];
        password(val?: any, force?: $mol_atom_force): any;
        passControl(): $mol_string;
        passwordField(): $mol_form_field;
        submitLabel(): string;
        event_submit(event?: any, force?: $mol_atom_force): any;
        submit_blocked(): boolean;
        submit(): $mol_button_major;
        form(): $mol_form;
        message(): string;
        sub(): any[];
        messageNoAccess(): string;
    }
}
declare var cpprun: any;
declare namespace $.$mol {
    class $mol_app_inventory_enter extends $.$mol_app_inventory_enter {
        event_submit(): void;
        message(): string;
    }
}
declare var hhfw: any;
declare var sqlitePlugin: any;
declare namespace $ {
    class $mol_hyperhive extends $mol_object {
        host(): string;
        version(): string;
        environment(): string;
        project(): string;
        application(): string;
        login(next?: string): string;
        password(next?: string): string;
        device(): string;
        static item(config: {
            host: string;
            version: string;
            environment: string;
            project: string;
            application: string;
        }): $mol_hyperhive;
        initialized(): boolean;
        authentificated(next?: boolean, force?: $mol_atom_force): boolean;
        resources(next?: any, force?: $mol_atom_force): boolean;
        data<Value>(table: string, next?: any, force?: $mol_atom_force): Value;
    }
}
declare namespace $ {
    const $mol_app_inventory_domain_position_status: {
        draft: string;
        approved: string;
        completed: string;
        pending: string;
        rejected: string;
    };
    interface $mol_app_inventory_domain_product_raw {
        R_MATERIAL_ID: string;
        R_BARCODE: string;
        R_NAME: string;
    }
    interface $mol_app_inventory_domain_position_raw {
        R_MOVEMENT_ID: string;
        R_MATERIAL_ID: string;
        R_QUANTITY: number;
        R_COMMENT: string;
        R_STATUS: typeof $mol_app_inventory_domain_position_status[keyof typeof $mol_app_inventory_domain_position_status];
    }
    class $mol_app_inventory_domain extends $mol_object {
        hyperhive(): $mol_hyperhive;
        products_table(): $mol_app_inventory_domain_product_raw[];
        positions_table(next?: $mol_app_inventory_domain_position_raw[]): $mol_app_inventory_domain_position_raw[];
        product_rows_by_id(): {
            [code: string]: $mol_app_inventory_domain_product_raw;
        };
        product_by_code(code: string): $mol_app_inventory_domain_product;
        product_rows_by_code(): {
            [code: string]: $mol_app_inventory_domain_product_raw;
        };
        position_rows_by_id(): {
            [code: string]: $mol_app_inventory_domain_position_raw;
        };
        products(): $mol_app_inventory_domain_product[];
        product(id: string): $mol_app_inventory_domain_product;
        product_code(id: string): string;
        product_title(id: string): string;
        positions(next?: $mol_app_inventory_domain_position[]): $mol_app_inventory_domain_position[];
        positions_by_product_id(): {
            [code: string]: $mol_app_inventory_domain_position;
        };
        position_by_product_id(product_id: string): $mol_app_inventory_domain_position;
        position(id: string): $mol_app_inventory_domain_position;
        position_product(id: string, next?: $mol_app_inventory_domain_product): $mol_app_inventory_domain_product;
        position_count(id: string, next?: number): number;
        position_status(id: string, next?: keyof typeof $mol_app_inventory_domain_position_status): any;
        credentials(next?: {
            login: string;
            password: string;
        }): {
            login: string;
            password: string;
        };
        authentificated(): boolean;
        can_write_off(): boolean;
        can_approve(): boolean;
        message(): string;
    }
    class $mol_app_inventory_domain_product extends $mol_object {
        id(): string;
        code(): string;
        title(): string;
        description(): string;
    }
    class $mol_app_inventory_domain_position extends $mol_object {
        id(): string;
        product(): $mol_app_inventory_domain_product;
        count(next?: number): number;
        status(next?: keyof typeof $mol_app_inventory_domain_position_status): "pending" | "completed" | "draft" | "approved" | "rejected";
        remark(next?: string): string;
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
    class $mol_app_inventory_domain_mock extends $mol_app_inventory_domain {
        products_table(): {
            R_MATERIAL_ID: string;
            R_NAME: string;
            R_BARCODE: string;
        }[];
        positions_table(next?: $mol_app_inventory_domain_position_raw[]): $mol_app_inventory_domain_position_raw[];
        authentificated(): boolean;
        message(): string;
    }
}
declare namespace $ {
    class $mol_app_inventory_test extends $mol_app_inventory {
        title(): string;
        domain(): $mol_app_inventory_domain_mock;
    }
}
declare namespace $ {
    function $mol_csv_parse(text: string, delimiter?: string): {
        [key: string]: any;
    }[];
}
declare namespace $ {
    class $mol_app_lamps extends $mol_book {
        lamp_current_id(val?: any, force?: $mol_atom_force): any;
        filter_hint(): string;
        filter(val?: any, force?: $mol_atom_force): any;
        Filter(): $mol_code;
        menu_scroll_top(val?: any, force?: $mol_atom_force): any;
        lamp_rows(): any[];
        Menu(): $mol_list;
        Addon_page(): $mol_page;
        title(): string;
        Close_icon(): $mol_icon_cross;
        Close(): $mol_link;
        rating_title(): string;
        rating(): number;
        Rating(): $mol_labeler;
        Stat(): $mol_row;
        type_title(): string;
        type(): string;
        Type(): $mol_labeler;
        shape_title(): string;
        shape(): string;
        Shape(): $mol_labeler;
        base_title(): string;
        base(): string;
        Base(): $mol_labeler;
        Body(): $mol_row;
        Temp_title(): string;
        temp(): string;
        Temp(): $mol_labeler;
        cri_title(): string;
        cri(): string;
        Cri(): $mol_labeler;
        ripple_title(): string;
        ripple(): string;
        Ripple(): $mol_labeler;
        angle_title(): string;
        angle(): string;
        Angle(): $mol_labeler;
        Light(): $mol_row;
        Info(): $mol_row;
        photo(): string;
        Photo(): $mol_image;
        Gallery(): $mol_row;
        Main_page(): $mol_page;
        pages(): any[];
        lamp_title(id: any): string;
        lamp_arg(id: any): {};
        Lamp_row(id: any): $mol_lamps_lamp_row;
    }
}
declare namespace $ {
    class $mol_lamps_lamp_row extends $mol_link {
        minimal_height(): number;
        sub(): any[];
    }
}
declare namespace $.$mol {
    class $mol_app_lamps extends $.$mol_app_lamps {
        lamps_all(): {
            [key: string]: any;
        }[];
        lamps(): {
            [key: string]: any;
        }[];
        lamps_dict(): {
            [key: string]: any;
        };
        lamp_rows(): $mol_lamps_lamp_row[];
        lamp_title(id: string): any;
        _filter_timer: number;
        filter(next?: string, force?: $mol_atom_force): string;
        filter_tags(next?: string[]): string[];
        lamp_arg(id: string): {
            'lamp': string;
        };
        id(next?: string): any;
        lamp(): any;
        pages(): $mol_view[];
        Placeholder(): $mol_book_placeholder;
        menu_scroll_top(next?: number): number;
        title(): any;
        cri(): string;
        angle(): string;
        shape(): string;
        base(): string;
        type(): string;
        temp(): string;
        matt(): boolean;
        ripple(): string;
        rating_cri(): 1 | 2 | 3 | 4 | 5 | 4.5 | 3.5;
        rating(): number;
        slug(id: string): any;
        photo(): string;
        thumb(id: string): string;
    }
}
declare namespace $ {
    class $mol_app_lamps_demo extends $mol_app_lamps {
        title(): string;
    }
}
declare namespace $ {
    class $mol_icon_external extends $mol_icon {
        path(): string;
    }
}
declare namespace $ {
    function $mol_html_decode(text: string): string;
}
declare namespace $ {
    class $mol_app_questions extends $mol_book {
        placeholder(): string;
        Placeholder(): $mol_book_placeholder;
        title_default(): string;
        menu_rows(): any[];
        Menu_links(): $mol_list;
        Menu(): $mol_page;
        question_title(id: any): string;
        question_permalink(id: any): string;
        Details_permalink_icon(id: any): $mol_icon_external;
        Details_permalink(id: any): $mol_link;
        Details_close_icon(id: any): $mol_icon_cross;
        Details_close(id: any): $mol_link;
        question_descr(id: any): string;
        Details_descr(id: any): $mol_text;
        answers(id: any): any[];
        Answers(id: any): $mol_list;
        Details(id: any): $mol_page;
        question_answer(id: any): string;
        Answer(id: any): $mol_text;
        question_arg_by_index(index: any): {};
        question_title_by_index(index: any): string;
        Question_title(index: any): $mol_view;
        question_tags_by_index(index: any): any[];
        Question_tags(index: any): $mol_view;
        Question_row(index: any): $mol_row;
        Question_link(index: any): $mol_link;
        tag_name(id: any): string;
        Tag(id: any): $mol_view;
    }
}
declare namespace $.$mol {
    class $mol_app_questions extends $.$mol_app_questions {
        pages(): $.$mol_page[];
        Placeholder(): $mol_book_placeholder;
        menu_rows(): any;
        question_cur_id(): number;
        question_tags_by_index(index: number): $mol_view[];
        tag_name(id: {
            row: number;
            tag: string;
        }): any;
        question_title_by_index(index: number): string;
        question_arg_by_index(index: number): {
            question: number;
        };
        question_title(id: number): string;
        question_descr(id: number): string;
        question_permalink(id: number): string;
        question_short(index: number): {
            title: string;
            creation_date: number;
            question_id: number;
            tags: string[];
            owner: {
                display_name: string;
            };
        };
        questions_count(): number;
        questions_data(page: number): {
            items: {
                title: string;
                creation_date: number;
                question_id: number;
                tags: string[];
                owner: {
                    display_name: string;
                };
            }[];
        };
        data_page_size(): number;
        question_full(id: number): {
            title: string;
            body_markdown: string;
            link: string;
        };
        question_answers(id: number): {
            score: number;
            body_markdown: string;
            share_link: string;
        }[];
        answers(id: number): $.$mol_text[];
        question_answer(id: {
            question: number;
            answer: number;
        }): string;
    }
}
declare namespace $ {
    class $mol_app_questions_demo extends $mol_app_questions {
        title(): string;
    }
}
declare namespace $ {
    class $mol_app_quine extends $mol_page {
        title(): string;
        content(): string;
        Text(): $mol_text;
        Content(): $mol_row;
        body(): any[];
        paths(): any[];
    }
}
declare namespace $.$mol {
    class $mol_app_quine extends $.$mol_app_quine {
        content(): string;
    }
}
declare namespace $ {
    class $mol_app_quine_demo extends $mol_app_quine {
    }
}
declare namespace $ {
    class $mol_app_report extends $mol_page {
        title(): string;
        description(): string;
        descriptor(): $mol_view;
        headCells(): any[];
        headRower(): $mol_app_report_rower;
        rows(): any[];
        tabler(): $mol_app_report_tabler;
        body(): any[];
        rowerCells(id: any): any[];
        rower(id: any): $mol_app_report_rower;
        cell_content(id: any): any;
        cellrows(id: any): number;
        cellCols(id: any): number;
        cell(id: any): $mol_app_report_cell;
        cell_value(id: any, val?: any, force?: $mol_atom_force): any;
        texter(id: any): $mol_view;
        cell_options(id: any): {};
        select(id: any): $mol_select;
        number(id: any): $mol_number;
    }
}
declare namespace $ {
    class $mol_app_report_tabler extends $mol_view {
        dom_name(): string;
        rows(): any[];
        sub(): any[];
    }
}
declare namespace $ {
    class $mol_app_report_rower extends $mol_view {
        dom_name(): string;
        cells(): any[];
        sub(): any[];
    }
}
declare namespace $ {
    class $mol_app_report_cell extends $mol_view {
        dom_name(): string;
        cols(): number;
        rows(): number;
        attr(): {
            "colspan": number;
            "rowspan": number;
        };
        content(): any;
        sub(): any[];
    }
}
declare namespace $.$mol {
    interface $mol_app_report_formatCol {
        title: string;
        field?: string;
        sub?: $mol_app_report_formatCol[];
    }
    interface $mol_app_report_formatRow {
        title: string;
        field?: string;
        sub?: $mol_app_report_formatRow[];
    }
    interface $mol_app_report_scheme {
        type: string;
        mask?: string;
        unit?: string;
        options?: {
            [name: string]: string;
        };
    }
    class $mol_app_report extends $.$mol_app_report {
        formatCols(): $mol_app_report_formatCol[];
        format_rows(): $mol_app_report_formatRow[];
        scheme(): {
            [field: string]: $mol_app_report_scheme;
        };
        data(): {
            [field: string]: string;
        };
        description(): string;
        headCells(): $mol_app_report_cell[];
        rows(): $mol_app_report_rower[];
        formatRow(pos: number[]): $mol_app_report_formatRow;
        rowerCells(pos: number[]): $mol_app_report_cell[];
        cellCols(pos: number[]): 0 | 1 | 2;
        cell_content(pos: number[]): $mol_view;
        cell_options(pos: number[]): {
            [name: string]: string;
        };
        cell_value(pos: number[], next: any): any;
        cell_contentName(pos: number[]): string;
        cell_contentValue(pos: number[]): string;
    }
}
declare namespace $ {
    class $mol_app_report_demo extends $mol_app_report {
    }
}
declare namespace $ {
    class $mol_app_signup extends $mol_scroll {
        title(): string;
        message_required(): string;
        message_no_spaces(): string;
        message_need_more_letters(): string;
        name_first_label(): string;
        name_first_errors(): any[];
        name_first_hint(): string;
        name_first(val?: any, force?: $mol_atom_force): any;
        Name_first_control(): $mol_string;
        Name_first_field(): $mol_form_field;
        name_nick_label(): string;
        name_nick_errors(): any[];
        name_nick_hint(): string;
        name_nick(val?: any, force?: $mol_atom_force): any;
        Name_nick_control(): $mol_string;
        Name_nick_field(): $mol_form_field;
        name_second_label(): string;
        name_second_errors(): any[];
        name_second_hint(): string;
        name_second(val?: any, force?: $mol_atom_force): any;
        Name_second_control(): $mol_string;
        Name_second_field(): $mol_form_field;
        sex_label(): string;
        sex_errors(): any[];
        sex(val?: any, force?: $mol_atom_force): any;
        sex_option_male(): string;
        sex_option_intersex(): string;
        sex_option_female(): string;
        sex_options(): {
            "male": string;
            "intersex": string;
            "female": string;
        };
        Sex_control(): $mol_switch;
        Sex_field(): $mol_form_field;
        submit_text(): string;
        event_submit(val?: any, force?: $mol_atom_force): any;
        submit_blocked(): boolean;
        Submit(): $mol_button_major;
        Form(): $mol_form;
        sub(): any[];
    }
}
declare namespace $.$mol {
    class $mol_app_signup extends $.$mol_app_signup {
        name_first(next?: string): string;
        name_first_errors(): string[];
        name_nick(next?: string): string;
        name_second(next?: string): string;
        name_second_errors(): string[];
        sex(next?: string): string;
        sex_errors(): string[];
        event_submit(next?: Event): void;
        submit_blocked(): boolean;
    }
}
declare namespace $ {
    class $mol_app_signup_demo extends $mol_app_signup {
    }
}
declare namespace $ {
    class $mol_speech extends $mol_object {
        static api(): any;
        static listening(next?: boolean): boolean;
        static event_result(event?: Event & {
            results: {
                transcript: string;
            }[][];
        }): void;
        static text(next?: string): string;
        render(): null;
        event_catch(found?: string[]): void;
        patterns(): string[];
        matchers(): RegExp[];
        prefix(): string;
        suffix(): string;
    }
}
declare namespace $ {
    class $mol_icon_microphone extends $mol_icon {
        path(): string;
    }
}
declare namespace $ {
    class $mol_check_icon extends $mol_check {
    }
}
declare namespace $ {
    class $mol_app_slides extends $mol_view {
        role(): string;
        attr(): {
            "mol_app_slides_role": string;
        };
        contents(val?: any, force?: $mol_atom_force): any;
        event_next(val?: any, force?: $mol_atom_force): any;
        speech_next(): any[];
        Speech_next(): $mol_speech;
        event_slide(val?: any, force?: $mol_atom_force): any;
        speech_slide(): any[];
        Speech_slide(): $mol_speech;
        event_prev(val?: any, force?: $mol_atom_force): any;
        speech_prev(): any[];
        Speech_prev(): $mol_speech;
        event_start(val?: any, force?: $mol_atom_force): any;
        speech_start(): any[];
        Speech_start(): $mol_speech;
        event_end(val?: any, force?: $mol_atom_force): any;
        speech_end(): any[];
        Speech_end(): $mol_speech;
        event_about(val?: any, force?: $mol_atom_force): any;
        speech_about(): any[];
        Speech_about(): $mol_speech;
        plugins(): any[];
        slide(val?: any, force?: $mol_atom_force): any;
        Slide_number(): $mol_view;
        uri_base(): string;
        listener_content(): string;
        Listener_content(): $mol_text;
        progress(): number;
        Progress(): $mol_portion;
        Listener(): $mol_page;
        open_listener_hint(): string;
        Open_listener_icon(): $mol_icon_external;
        Open_listener(): $mol_link;
        Speech_toggle_icon(): $mol_icon_microphone;
        speech_enabled(val?: any, force?: $mol_atom_force): any;
        speech_toggle_hint(): string;
        Speech_toggle(): $mol_check_icon;
        Slide_switcher(): $mol_number;
        speaker_content(): string;
        Speaker_content(): $mol_text;
        Speaker(): $mol_page;
        uri_slides_default(): string;
        uri_slides(): string;
        event_load(val?: any, force?: $mol_atom_force): any;
        Loader(): $mol_view;
        sub(): any[];
    }
}
declare namespace $.$mol {
    class $mol_app_slides extends $.$mol_app_slides {
        sub(): $mol_view[] | $.$mol_page[];
        uri_base(): any;
        event_load(): void;
        content_pages(): {
            title: string;
            speaker: string;
            listener: string;
        }[];
        title(): string;
        speaker_content(): string;
        listener_content(): string;
        slide_local(uri: string, next: number): number;
        slide(next?: number): number;
        role(next?: 'speaker' | 'listener'): any;
        uri_slides(): any;
        event_next(next?: Event): void;
        event_prev(next?: Event): void;
        event_start(next?: Event): void;
        event_end(next?: Event): void;
        event_slide([numb]: [string]): void;
        event_about([topic]: [string]): void;
        speech_enabled(next?: boolean): boolean;
        timings(): number[];
        timing_total(): number;
        progress(): number;
    }
}
declare namespace $ {
    class $mol_cost extends $mol_view {
        value(): any;
        prefix(): string;
        Prefix(): $mol_view;
        value_view(): string;
        Value(): $mol_view;
        postfix(): string;
        Postfix(): $mol_view;
        sub(): any[];
    }
}
declare namespace $.$mol {
    class $mol_cost extends $.$mol_cost {
        value(): $mol_unit_money;
        prefix(): string;
        value_view(): string;
        postfix(): string;
    }
}
declare namespace $ {
    class $mol_app_supplies_domain_provider extends $mol_object {
        id(): string;
        name(): string;
    }
    class $mol_app_supplies_domain_supply_group extends $mol_object {
        id(): string;
        name(): string;
        manager(): $mol_app_supplies_domain_person;
    }
    class $mol_app_supplies_domain_supply_division extends $mol_object {
        id(): string;
        name(): string;
    }
    class $mol_app_supplies_domain_pay_method extends $mol_object {
        id(): string;
        name(): string;
    }
    class $mol_app_supplies_domain_debitor extends $mol_object {
        id(): string;
        name(): string;
    }
    class $mol_app_supplies_domain_supply_position extends $mol_object {
        name(): string;
        supply_moment(): $mol_time_moment;
        division(): $mol_app_supplies_domain_supply_division;
        store(): $mol_app_supplies_domain_store;
        price(): $mol_unit_money;
        quantity(): number;
        cost(): $mol_unit_money;
    }
    class $mol_app_supplies_domain_attachment extends $mol_object {
        url_thumb(): string;
        url_load(): string;
    }
    class $mol_app_supplies_domain_person extends $mol_object {
        id(): string;
        name(): string;
    }
    class $mol_app_supplies_domain_contract extends $mol_object {
        id(): string;
    }
    class $mol_app_supplies_domain_ballance_unit extends $mol_object {
        id(): string;
        name(): string;
    }
    class $mol_app_supplies_domain_consumer extends $mol_object {
        id(): string;
        name(): string;
    }
    class $mol_app_supplies_domain_store extends $mol_object {
        id(): string;
        name(): string;
    }
    class $mol_app_supplies_domain_supply extends $mol_object {
        id(): string;
        provider(): $mol_app_supplies_domain_provider;
        consumer(): $mol_app_supplies_domain_consumer;
        group(): $mol_app_supplies_domain_supply_group;
        status(next?: $mol_app_supplies_domain_supply_status): $mol_app_supplies_domain_supply_status;
        ballance_unit(): $mol_app_supplies_domain_ballance_unit;
        manager(): $mol_app_supplies_domain_person;
        contract(): $mol_app_supplies_domain_contract;
        pay_method(): $mol_app_supplies_domain_pay_method;
        debitor(): $mol_app_supplies_domain_debitor;
        positions(): $mol_app_supplies_domain_supply_position[];
        attachments(next?: $mol_app_supplies_domain_attachment[]): $mol_app_supplies_domain_attachment[];
        cost(): $mol_unit_money;
    }
    enum $mol_app_supplies_domain_supply_status {
        pending,
        approved,
    }
    class $mol_app_supplies_domain_mock extends $mol_object {
        supplies(): $mol_app_supplies_domain_supply[];
        positions(supply: string): $mol_app_supplies_domain_supply_position[];
        supply_status(id: string, next?: $mol_app_supplies_domain_supply_status): $mol_app_supplies_domain_supply_status;
        supply(id: string): $mol_app_supplies_domain_supply;
        provider(id: string): $mol_app_supplies_domain_provider;
        consumer(id: string): $mol_app_supplies_domain_consumer;
        ballance_unit(id: string): $mol_app_supplies_domain_ballance_unit;
        division(id: string): $mol_app_supplies_domain_supply_division;
        supply_group(id: string): $mol_app_supplies_domain_supply_group;
        store(id: string): $mol_app_supplies_domain_store;
        person(id: string): $mol_app_supplies_domain_person;
        contract(id: string): $mol_app_supplies_domain_person;
        pay_method(id: string): $mol_app_supplies_domain_pay_method;
        debitor(id: string): $mol_app_supplies_domain_pay_method;
        position(id: {
            supply: string;
            position: string;
        }): $mol_app_supplies_domain_supply_position;
        attachments(id: string, next?: $mol_app_supplies_domain_attachment[]): $mol_app_supplies_domain_attachment[];
        attachment(id: {
            supply: string;
            attachment: string;
        }): $mol_app_supplies_domain_attachment;
    }
}
declare namespace $ {
    class $mol_app_supplies_card extends $mol_link {
        supply(): any;
        status(): string;
        code_title(): string;
        code(): string;
        Code_item(): $mol_labeler;
        cost_title(): string;
        cost(): $mol_unit_money;
        Cost(): $mol_cost;
        Cost_item(): $mol_labeler;
        provider_title(): string;
        provider_name(): string;
        Provider_item(): $mol_labeler;
        items(): any[];
        Group(): $mol_row;
        Card(): $mol_card;
        sub(): any[];
    }
}
declare namespace $.$mol {
    class $mol_app_supplies_card extends $.$mol_app_supplies_card {
        supply(): $mol_app_supplies_domain_supply;
        code(): string;
        provider_name(): string;
        cost(): $mol_unit_money;
        status(): string;
    }
}
declare namespace $ {
    class $mol_app_supplies_enter extends $mol_view {
        entered(val?: any, force?: $mol_atom_force): any;
        loginLabel(): string;
        loginErrors(): any[];
        login(val?: any, force?: $mol_atom_force): any;
        loginControl(): $mol_string;
        loginField(): $mol_form_field;
        passwordLabel(): string;
        passwordErrors(): any[];
        password(val?: any, force?: $mol_atom_force): any;
        passControl(): $mol_string;
        passwordField(): $mol_form_field;
        submitLabel(): string;
        event_submit(val?: any, force?: $mol_atom_force): any;
        submit_blocked(): boolean;
        submit(): $mol_button_major;
        form(): $mol_form;
        sub(): any[];
    }
}
declare namespace $.$mol {
    class $mol_app_supplies_enter extends $.$mol_app_supplies_enter {
        event_submit(): void;
    }
}
declare namespace $ {
    class $mol_app_supplies_list extends $mol_page {
        supplies(): any[];
        title(): string;
        search_hint(): string;
        search_query(val?: any, force?: $mol_atom_force): any;
        Search(): $mol_code;
        head(): any[];
        supply_rows(): any[];
        Supply_rows(): $mol_list;
        body(): any[];
        supply(index: any): any;
        event_navigate(val?: any, force?: $mol_atom_force): any;
        supply_id(index: any): string;
        supply_arg(index: any): {
            "supply": string;
        };
        Supply_row(index: any): $mol_app_supplies_card;
    }
}
declare namespace $.$mol {
    class $mol_app_supplies_list extends $.$mol_app_supplies_list {
        supply_rows(): $.$mol_app_supplies_card[];
        supply(index: number): any;
        supply_id(index: number): any;
    }
}
declare namespace $ {
    class $mol_deck extends $mol_list {
        items(): any[];
        current(val?: any, force?: $mol_atom_force): any;
        switch_options(): {};
        Switch(): $mol_switch;
        Content(): any;
        rows(): any[];
    }
}
declare namespace $.$mol {
    class $mol_deck extends $.$mol_deck {
        current(next?: string): string;
        switch_options(): {
            [key: string]: () => string;
        };
        Content(): any;
    }
}
declare namespace $ {
    class $mol_tiler extends $mol_view {
        items(): any[];
        sub(): any[];
    }
}
declare namespace $.$mol {
    class $mol_tiler extends $.$mol_tiler {
        sub(): $mol_view[];
        groupItems(path: number[]): $mol_view[];
        groupChilds(path: number[]): $mol_view[];
        child(path: number[]): $mol_view;
        group(path: number[]): $mol_view;
        item(path: number[]): $mol_view;
    }
}
declare namespace $ {
    class $mol_icon_attach extends $mol_icon {
        path(): string;
    }
}
declare namespace $ {
    class $mol_attach extends $mol_card {
        items(val?: any, force?: $mol_atom_force): any;
        attach_new(val?: any, force?: $mol_atom_force): any;
        Add(): $mol_attach_add;
        content(): any[];
        Content(): $mol_tiler;
        attach_title(): string;
        Item(id: any): $mol_attach_item;
    }
}
declare namespace $ {
    class $mol_attach_item extends $mol_link {
        url_thumb(val?: any, force?: $mol_atom_force): any;
        url_load(val?: any, force?: $mol_atom_force): any;
        uri(val?: any, force?: $mol_atom_force): any;
        style_bg(): string;
        style(): {
            "backgroundImage": string;
        };
        title(): string;
        attr(): {
            "download": string;
            "href": string;
            "title": string;
            "target": string;
            "mol_link_current": boolean;
        };
    }
}
declare namespace $ {
    class $mol_attach_add extends $mol_button_minor {
        minimal_height(): number;
        file_new(val?: any, force?: $mol_atom_force): any;
        Icon(): $mol_icon_attach;
        event_capture(val?: any, force?: $mol_atom_force): any;
        event_picked(val?: any, force?: $mol_atom_force): any;
        Input(): $mol_attach_add_input;
        sub(): any[];
    }
}
declare namespace $ {
    class $mol_attach_add_input extends $mol_view {
        dom_name(): string;
        type(): string;
        accept(): string;
        multiple(): boolean;
        attr(): {
            "type": string;
            "accept": string;
            "multiple": boolean;
        };
        event_capture(val?: any, force?: $mol_atom_force): any;
        event_click(val?: any, force?: $mol_atom_force): any;
        event_picked(val?: any, force?: $mol_atom_force): any;
        event(): {
            "change": (val?: any) => any;
        };
    }
}
declare namespace $.$mol {
    class $mol_attach extends $.$mol_attach {
        attach_new(next?: string): string;
    }
    class $mol_attach_item extends $.$mol_attach_item {
        style_bg(): string;
    }
    class $mol_attach_add extends $.$mol_attach_add {
        file_new(next?: string): string;
        event_capture(next?: Event): void;
        event_picked(next?: Event): void;
    }
}
declare namespace $ {
    class $mol_section extends $mol_list {
        head(): any;
        Head(): $mol_view;
        Content(): any;
        rows(): any[];
    }
}
declare namespace $ {
    class $mol_app_supplies_position extends $mol_card {
        minimal_height(): number;
        position(): $mol_app_supplies_domain_supply_position;
        product_title(): string;
        product_name(): string;
        Product_item(): $mol_labeler;
        cost_title(): string;
        cost(): $mol_unit_money;
        Cost(): $mol_cost;
        Cost_item(): $mol_labeler;
        Main_group(): $mol_row;
        division_title(): string;
        division_name(): string;
        Division_item(): $mol_labeler;
        price_label(): string;
        price(): $mol_unit_money;
        Price(): $mol_cost;
        Price_item(): $mol_labeler;
        Addon_group(): $mol_row;
        quantity_title(): string;
        quantity(): string;
        Quantity_item(): $mol_labeler;
        supply_date_title(): string;
        supply_date(): string;
        Supply_date_item(): $mol_labeler;
        store_title(): string;
        store_name(): string;
        Store_item(): $mol_labeler;
        Supply_group(): $mol_row;
        Row(): $mol_view;
        Content(): $mol_view;
    }
}
declare namespace $.$mol {
    class $mol_app_supplies_position extends $.$mol_app_supplies_position {
        product_name(): string;
        price(): $mol_unit_money;
        quantity(): string;
        cost(): $mol_unit_money;
        supply_date(): string;
        division_name(): string;
        store_name(): string;
    }
}
declare namespace $ {
    class $mol_app_supplies_detail extends $mol_page {
        supply(): any;
        title(): string;
        Close_icon(): $mol_icon_cross;
        close_arg(): {
            "supply": any;
        };
        Close(): $mol_link;
        tools(): any[];
        org_title(): string;
        provider_title(): string;
        provider_name(): string;
        Provider(): $mol_labeler;
        customer_label(): string;
        consumer_name(): string;
        Consumer(): $mol_labeler;
        supply_group_title(): string;
        supply_group_name(): string;
        Supply_group(): $mol_labeler;
        ballance_unit_title(): string;
        ballance_unit_name(): string;
        Ballance_unit_item(): $mol_labeler;
        org_items(): any[];
        Org_content(): $mol_row;
        Org(): {
            "title": string;
            "Content": $mol_row;
        };
        cons_title(): string;
        contract_title(): string;
        contract_id(): string;
        Contract(): $mol_labeler;
        pay_method_title(): string;
        pay_method_name(): string;
        Pay_method(): $mol_labeler;
        manager_title(): string;
        manager_name(): string;
        Manager(): $mol_labeler;
        debitod_title(): string;
        debitor_name(): string;
        Debitor(): $mol_labeler;
        cons_items(): any[];
        Cons_content(): $mol_row;
        Cons(): {
            "title": string;
            "Content": $mol_row;
        };
        Descr_deck(): $mol_deck;
        Descr_card(): $mol_card;
        attach_title(): string;
        attachments(): any[];
        attach_new(val?: any, force?: $mol_atom_force): any;
        Attach(): $mol_attach;
        Attach_section(): $mol_section;
        positions_title(): string;
        cost_title(): string;
        cost(): $mol_unit_money;
        Cost_value(): $mol_cost;
        Cost(): $mol_labeler;
        positions_head(): any[];
        positions(): any[];
        Positions(): $mol_list;
        Positions_section(): $mol_section;
        content(): any[];
        Content(): $mol_list;
        List(): $mol_list;
        body(): any[];
        approved(val?: any, force?: $mol_atom_force): any;
        approved_title(): string;
        Approve(): $mol_check_box;
        actions(): any[];
        Actions(): $mol_row;
        foot(): any[];
        position(index: any): any;
        Position(index: any): $mol_app_supplies_position;
        attachment_thumb(index: any): string;
        attachment_load(index: any): string;
        Attachment(index: any): $mol_attach_item;
    }
}
declare namespace $.$mol {
    class $mol_app_supplies_detail extends $.$mol_app_supplies_detail {
        supply(): $mol_app_supplies_domain_supply;
        title(): string;
        approved(next?: boolean): boolean;
        provider_name(): string;
        consumer_name(): string;
        ballance_unit_name(): string;
        supply_group_name(): string;
        manager_name(): string;
        pay_method_name(): string;
        debitor_name(): string;
        contract_id(): string;
        cost(): $mol_unit_money;
        status(): string;
        positions(): $.$mol_app_supplies_position[];
        position(index: number): $mol_app_supplies_domain_supply_position;
        attachments(): $.$mol_attach_item[];
        attachment_thumb(index: number): string;
        attachment_load(index: number): string;
        attach_new(next?: string): void;
        body_scroll_top(next?: number): number;
    }
}
declare namespace $ {
    class $mol_app_supplies_root extends $mol_book {
        entered(val?: any, force?: $mol_atom_force): any;
        enter(): $mol_app_supplies_enter;
        supplies(): any[];
        supply_id(val?: any, force?: $mol_atom_force): any;
        lister(): $mol_app_supplies_list;
        supply(): any;
        detailer(): $mol_app_supplies_detail;
        placeholder(): $mol_book_placeholder;
    }
}
declare namespace $.$mol {
    class $mol_app_supplies_root extends $.$mol_app_supplies_root {
        entered(next?: boolean): boolean;
        pages(): $mol_view[] | $.$mol_app_supplies_enter[];
        Placeholder(): $mol_book_placeholder;
        domain(): $mol_app_supplies_domain_mock;
        supplies(): $mol_app_supplies_domain_supply[];
        supply_id(next?: string): any;
        supply(): $mol_app_supplies_domain_supply;
    }
}
declare namespace $ {
    class $mol_app_supplies_demo extends $mol_app_supplies_root {
        title(): string;
        entered(): boolean;
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
declare namespace $ {
    function $mol_merge_dict<Target, Source>(target: Target, source: Source): Target & Source;
}
declare namespace $ {
    class $mol_app_todomvc extends $mol_scroll {
        title(): string;
        Title(): $mol_view;
        head_complete_enabled(): boolean;
        completed_all(val?: any, force?: $mol_atom_force): any;
        Head_complete(): $mol_check;
        task_title_new(val?: any, force?: $mol_atom_force): any;
        event_add(event?: any, force?: $mol_atom_force): any;
        Add(): $mol_app_todomvc_add;
        Head_content(): any[];
        Head(): $mol_view;
        task_rows(): any[];
        List(): $mol_list;
        pending_message(): string;
        Pending(): $mol_view;
        filter_all_label(): string;
        Filter_all(): $mol_link;
        filter_active_label(): string;
        Filter_active(): $mol_link;
        filter_completed_label(): string;
        Filter_completed(): $mol_link;
        filterOptions(): any[];
        Filter(): $mol_bar;
        sweep_enabled(): boolean;
        event_sweep(event?: any, force?: $mol_atom_force): any;
        sweep_label(): string;
        Sweep(): $mol_button_minor;
        foot_content(): any[];
        Foot(): $mol_view;
        panels(): any[];
        Panel(): $mol_list;
        Page(): $mol_list;
        sub(): any[];
        task_completed(id: any, val?: any, force?: $mol_atom_force): any;
        task_title(id: any, val?: any, force?: $mol_atom_force): any;
        event_task_drop(id: any, event?: any, force?: $mol_atom_force): any;
        Task_row(id: any): $mol_app_todomvc_task_row;
    }
}
declare namespace $ {
    class $mol_app_todomvc_add extends $mol_string {
        hint(): string;
        event_press(event?: any, force?: $mol_atom_force): any;
        event(): {
            "keyup": (event?: any) => any;
            "input": (event?: any) => any;
            "keypress": (event?: any) => any;
        };
        event_done(event?: any, force?: $mol_atom_force): any;
    }
}
declare namespace $ {
    class $mol_app_todomvc_task_row extends $mol_view {
        minimal_height(): number;
        completed(val?: any, force?: $mol_atom_force): any;
        Complete(): $mol_check;
        title_hint(): string;
        title(val?: any, force?: $mol_atom_force): any;
        Title(): $mol_string;
        event_drop(event?: any, force?: $mol_atom_force): any;
        Drop(): $mol_button;
        sub(): any[];
        attr(): {
            "mol_app_todomvc_task_row_completed": any;
        };
    }
}
interface $mol_app_todomvc_task {
    completed?: boolean;
    title?: string;
}
declare namespace $.$mol {
    class $mol_app_todomvc_add extends $.$mol_app_todomvc_add {
        event_press(next?: KeyboardEvent): any;
    }
    class $mol_app_todomvc extends $.$mol_app_todomvc {
        task_ids(next?: number[]): number[];
        arg_completed(): any;
        groups_completed(): {
            [index: string]: number[];
        };
        tasks_filtered(): number[];
        completed_all(next?: boolean): boolean;
        head_complete_enabled(): boolean;
        pending_message(): string;
        new_id(): number;
        event_add(next: Event): void;
        task_rows(): $mol_app_todomvc_task_row[];
        task(id: number, next?: $mol_app_todomvc_task): $mol_app_todomvc_task;
        task_completed(index: number, next?: boolean): boolean;
        task_title(index: number, next?: string): string;
        event_task_drop(index: number, next?: Event): void;
        event_sweep(): void;
        panels(): ($mol_view | $.$mol_list)[];
        foot_visible(): boolean;
        sweep_enabled(): boolean;
    }
}
declare namespace $ {
    class $mol_app_todomvc_demo extends $mol_app_todomvc {
    }
}
declare namespace $ {
    class $mol_app_users extends $mol_page {
        filter_hint(): string;
        query(val?: any, force?: $mol_atom_force): any;
        Filter(): $mol_string;
        Head_row(): $mol_row;
        head(): any[];
        user_rows(): any[];
        empty_message(): string;
        Empty(): $mol_view;
        List(): $mol_list;
        body(): any[];
        reload_label(): string;
        event_reload(val?: any, force?: $mol_atom_force): any;
        Reload(): $mol_button_minor;
        loaded(): boolean;
        add_label(): string;
        event_add(val?: any, force?: $mol_atom_force): any;
        Add(): $mol_button_minor;
        changed(): boolean;
        save_label(): string;
        event_save(val?: any, force?: $mol_atom_force): any;
        Save(): $mol_button_major;
        users_master(): any;
        Message(): $mol_status;
        Foot(): $mol_row;
        Touch(): $mol_touch;
        plugins(): any[];
        user_name(id: any, val?: any, force?: $mol_atom_force): any;
        event_user_drop(id: any, val?: any, force?: $mol_atom_force): any;
        User_row(id: any): $mol_app_users_row;
    }
}
declare namespace $ {
    class $mol_app_users_row extends $mol_row {
        minimal_height(): number;
        title(val?: any, force?: $mol_atom_force): any;
        Title(): $mol_string;
        drop_label(): string;
        event_drop(val?: any, force?: $mol_atom_force): any;
        Drop(): $mol_button_minor;
        sub(): any[];
    }
}
declare namespace $.$mol {
    class $mol_app_users extends $.$mol_app_users {
        query(next?: string, force?: $mol_atom_force): string;
        master(): $mol_http;
        sub(): $mol_view[];
        users(next?: string[], force?: $mol_atom_force): string[];
        users_master(next?: string[], force?: $mol_atom_force): string[];
        event_reload(next?: Event): void;
        event_add(next?: Event): void;
        event_user_drop(id: number, next?: Event): void;
        changed(): boolean;
        loaded(): boolean;
        event_save(next?: Event): void;
        user_rows(): $mol_app_users_row[];
        user_name(index: number, next?: string): string;
    }
}
declare namespace $ {
    function $mol_assert_ok(value: any): void;
    function $mol_assert_not(value: any): void;
    function $mol_assert_fail(handler: () => any, ErrorRight?: any): any;
    function $mol_assert_equal<Value>(a: Value, b: Value): void;
    function $mol_assert_unique<Value>(a: Value, b: Value): void;
}
declare namespace $ {
    function $mol_atom_task<Value>(host: any, handler: () => Value): $mol_atom<Value>;
}
declare namespace $ {
    class $mol_attach_demo extends $mol_view {
        title(): string;
        empty_items(val?: any, force?: $mol_atom_force): any;
        Empty(): $mol_attach;
        Item1(): $mol_attach_item;
        Item2(): $mol_attach_item;
        Item3(): $mol_attach_item;
        filled_items(val?: any, force?: $mol_atom_force): any;
        Filled(): $mol_attach;
        sub(): any[];
    }
}
declare namespace $ {
    class $mol_bar_demo extends $mol_row {
        title(): string;
        value(val?: any, force?: $mol_atom_force): any;
        Two_mail(): $mol_string;
        Two_submit(): $mol_button_minor;
        Two(): $mol_bar;
        Three_mail(): $mol_string;
        Three_confirm(): $mol_check_box;
        Three_submit(): $mol_button_minor;
        Tree(): $mol_bar;
        sub(): any[];
    }
}
declare namespace $ {
    class $mol_bench_demo extends $mol_bench {
        title(): string;
    }
}
declare namespace $.$mol {
    class $mol_bench_demo extends $.$mol_bench_demo {
        col_sort(next?: string): string;
        result(): {
            'bubble': {
                'algorithm': string;
                'min': string;
                'mid': string;
                'max': string;
            };
            'qsort': {
                'algorithm': string;
                'min': string;
                'mid': string;
                'max': string;
            };
        };
    }
}
declare namespace $ {
    class $mol_book_demo extends $mol_book {
        title(): string;
        Placeholder(): $mol_book_placeholder;
        Addon(): $mol_view;
        Main(): $mol_view;
        pages(): any[];
    }
}
declare namespace $ {
    function $mol_typeof(value: any): any;
}
declare namespace $ {
    class $mol_tree {
        type: string;
        data: string;
        sub: $mol_tree[];
        baseUri: string;
        row: number;
        col: number;
        constructor(config: {
            type?: string;
            value?: string;
            data?: string;
            sub?: $mol_tree[];
            baseUri?: string;
            row?: number;
            col?: number;
        });
        static values(str: string, baseUri?: string): $mol_tree[];
        clone(config: {
            type?: string;
            value?: string;
            data?: string;
            sub?: $mol_tree[];
            baseUri?: string;
            row?: number;
            col?: number;
        }): $mol_tree;
        static fromString(str: string, baseUri?: string): $mol_tree;
        static fromJSON(json: any, baseUri?: string): $mol_tree;
        readonly uri: string;
        toString(prefix?: string): string;
        toJSON(): any;
        readonly value: string;
        select(...path: string[]): $mol_tree;
        filter(path: string[], value?: string): $mol_tree;
    }
}
declare namespace $ {
    function $mol_view_tree2ts(tree: $mol_tree): {
        script: string;
        locales: {
            [key: string]: string;
        };
    };
}
declare namespace $ {
    class $mol_graph<Node, Edge> {
        nodes: {
            [id: string]: Node;
        };
        edgesOut: {
            [from: string]: {
                [to: string]: Edge;
            };
        };
        edgesIn: {
            [to: string]: {
                [from: string]: Edge;
            };
        };
        nodeEnsure(id: string): void;
        linkOut(from: string, to: string, edge: Edge): void;
        linkIn(to: string, from: string, edge: Edge): void;
        edgeOut(from: string, to: string): Edge;
        edgeIn(to: string, from: string): Edge;
        link(one: string, two: string, edge: Edge): void;
        sorted(getWeight: (edge: Edge) => number): string[];
    }
}
declare namespace $ {
    function $mol_exec(dir: string, command: string, ...args: string[]): any;
}
declare namespace $ {
    class $mol_build extends $mol_object {
        static root(path: string): $mol_build;
        static relative(path: string): $mol_build;
        server(): $mol_build_server;
        root(): $mol_file;
        mods({path, exclude}: {
            path: string;
            exclude?: string[];
        }): $mol_file[];
        modsRecursive({path, exclude}: {
            path: string;
            exclude?: string[];
        }): $mol_file[];
        sources({path, exclude}: {
            path: string;
            exclude?: string[];
        }): $mol_file[];
        sourcesSorted({path, exclude}: {
            path: string;
            exclude?: string[];
        }): $mol_file[];
        sourcesAll({path, exclude}: {
            path: string;
            exclude?: string[];
        }): $mol_file[];
        tsOptions(): any;
        tsSource({path, target}: {
            path: string;
            target: number;
        }): any;
        tsHost(): {
            getScriptVersion: (path: string) => any;
            getScriptSnapshot: (path: string) => any;
            getCurrentDirectory: () => string;
            getCompilationSettings: () => any;
            useCaseSensitiveFileNames: () => boolean;
            getCanonicalFileName: (path: string) => string;
            getDefaultLibFileName: (options: any) => any;
            getCommonSourceDirectory: () => string;
            getNewLine: () => string;
            getSourceFile: (path: string, target: any, fail: any) => any;
            fileExists: (path: string) => boolean;
            writeFile: (path: string, content: string) => void;
        };
        sourcesJS({path, exclude}: {
            path: string;
            exclude?: string[];
        }): $mol_file[];
        sourcesDTS({path, exclude}: {
            path: string;
            exclude?: string[];
        }): $mol_file[];
        sourcesCSS({path, exclude}: {
            path: string;
            exclude?: string[];
        }): $mol_file[];
        static dependors: {
            [index: string]: (source: $mol_file) => {
                [index: string]: number;
            };
        };
        srcDeps(path: string): {};
        modDeps({path, exclude}: {
            path: string;
            exclude?: string[];
        }): {
            [index: string]: number;
        };
        dependencies({path, exclude}: {
            path: string;
            exclude?: string[];
        }): {};
        packEnsure(name: string): boolean;
        modEnsure(path: string): boolean;
        packMapping(): $mol_tree;
        graph({path, exclude}: {
            path: string;
            exclude?: string[];
        }): $mol_graph<null, {
            priority: number;
        }>;
        bundle({path, bundle}: {
            path: string;
            bundle?: string;
        }): Object[];
        logBundle(target: $mol_file): void;
        bundleJS({path, exclude, bundle}: {
            path: string;
            exclude?: string[];
            bundle: string;
        }): $mol_file[];
        bundleTestJS({path, exclude, bundle}: {
            path: string;
            exclude?: string[];
            bundle: string;
        }): $mol_file[];
        bundleDTS({path, exclude, bundle}: {
            path: string;
            exclude?: string[];
            bundle: string;
        }): $mol_file[];
        bundlePackageJSON({path, exclude}: {
            path: string;
            exclude?: string[];
        }): $mol_file[];
        bundleFiles({path, exclude}: {
            path: string;
            exclude?: string[];
        }): $mol_file[];
        bundleCordova({path, exclude}: {
            path: string;
            exclude?: string[];
        }): $mol_file[];
        bundleCSS({path, exclude, bundle}: {
            path: string;
            exclude?: string[];
            bundle: string;
        }): $mol_file[];
        bundleLocale({path, exclude, bundle}: {
            path: string;
            exclude?: string[];
            bundle: string;
        }): $mol_file[];
        bundleDepsJSON({path, exclude, bundle}: {
            path: string;
            exclude?: string[];
            bundle: string;
        }): $mol_file[];
    }
}
declare namespace $ {
    class $mol_server extends $mol_object {
        express(): any;
        messageStart(port: number): string;
        expressHandlers(): any[];
        expressCompressor(): any;
        expressBodier(): any;
        expressFiler(): any;
        expressDirector(): any;
        expressGenerator(): (req: any, res: any, next: () => void) => void;
        bodyLimit(): string;
        cacheTime(): number;
        port(): number;
        rootPublic(): string;
    }
}
declare namespace $ {
    class $mol_build_server extends $mol_server {
        expressGenerator(): (req: any, res: any, next: () => void) => void;
        build(): $mol_build;
        generator(path: string): Object[];
        port(): number;
    }
}
declare var process: any;
declare namespace $ {
    function $mol_build_start(paths: string[]): void;
}
declare namespace $ {
    class $mol_button_demo extends $mol_row {
        title(): string;
        major_label(): string;
        Major_enabled(): $mol_button_major;
        Major_disabled(): $mol_button_major;
        minor_label(): string;
        Minor_enabled(): $mol_button_minor;
        Minor_disabled(): $mol_button_minor;
        danger_label(): string;
        Danger_enabled(): $mol_button_danger;
        Danger_disabled(): $mol_button_danger;
        sub(): any[];
    }
}
declare namespace $ {
    class $mol_card_demo extends $mol_row {
        title(): string;
        Simple(): $mol_card;
        Pending(): $mol_card;
        sub(): any[];
    }
}
declare namespace $ {
    class $mol_chart_demo_simple extends $mol_chart {
        title(): string;
        vert_title(): string;
        Vert_ruler(): $mol_plot_ruler_vert;
        hor_title(): string;
        hor_label_text(key: any): string;
        Hor_ruler(): $mol_plot_ruler_hor;
        plan_title(): string;
        plan(): {
            "january": number;
            "february": number;
            "march": number;
            "april": number;
        };
        Plan(): $mol_plot_bar;
        fact_title(): string;
        fact(): {
            "january": number;
            "february": number;
            "march": number;
        };
        Fact_line(): $mol_plot_line;
        Fact_dots(): $mol_plot_dot;
        Fact(): $mol_plot_group;
        graphs(): any[];
    }
}
declare namespace $.$mol {
    class $mol_chart_demo_simple extends $.$mol_chart_demo_simple {
        hor_label_text(key: string): string;
    }
}
declare namespace $ {
    class $mol_plot_fill extends $mol_plot_graph {
        front(): any[];
        curve(): string;
        Curve(): $mol_svg_path;
        sub(): any[];
        Sample(): $mol_plot_graph_sample;
    }
}
declare namespace $.$mol {
    class $mol_plot_fill extends $.$mol_plot_fill {
        curve(): string;
        back(): this[];
    }
}
declare namespace $ {
    class $mol_chart_demo_styles extends $mol_chart {
        title(): string;
        energy_title(): string;
        Energy(): $mol_plot_ruler_vert;
        day_title(): string;
        series_1(): any[];
        Day(): $mol_plot_ruler_hor;
        receipts_title(): string;
        series_2(): any[];
        Receipts(): $mol_plot_bar;
        receipts_confirmed_title(): string;
        series_3(): any[];
        Receipts_confirmed(): $mol_plot_bar;
        maximum_title(): string;
        Maximum(): $mol_plot_dot;
        waste_title(): string;
        series_4(): any[];
        Waste(): $mol_plot_line;
        purchases_title(): string;
        series_5(): any[];
        Purchases_fill(): $mol_plot_fill;
        Purchases_line(): $mol_plot_line;
        Purchases_dots(): $mol_plot_dot;
        Purchases(): $mol_plot_group;
        taxes_title(): string;
        series_6(): any[];
        Taxes_fill(): $mol_plot_fill;
        Taxes_line(): $mol_plot_line;
        Taxes_dots(): $mol_plot_dot;
        Taxes(): $mol_plot_group;
        graphs(): any[];
        count(val?: any, force?: $mol_atom_force): any;
        Count(): $mol_number;
        sub(): any[];
    }
}
declare namespace $.$mol {
    class $mol_chart_demo_styles extends $.$mol_chart_demo_styles {
        series(): number[];
        series_1(): number[];
        series_2(): number[];
        series_3(): number[];
        series_4(): number[];
        series_5(): number[];
        series_6(): number[];
    }
}
declare namespace $ {
    class $mol_check_box_demo extends $mol_row {
        title(): string;
        base_checked(val?: any, force?: $mol_atom_force): any;
        c1Label(): string;
        Labeled_base(): $mol_check_box;
        c2Label(): string;
        checked_checked(val?: any, force?: $mol_atom_force): any;
        Labeled_checked(): $mol_check_box;
        c6Label(): string;
        Labeled_disabled(): $mol_check_box;
        Alone_base(): $mol_check_box;
        Alone_checked(): $mol_check_box;
        Alone_disabled(): $mol_check_box;
        sub(): any[];
    }
}
declare namespace $ {
    class $mol_check_expand_demo extends $mol_row {
        title(): string;
        base_expanded(val?: any, force?: $mol_atom_force): any;
        c1Label(): string;
        Labeled_base(): $mol_check_expand;
        c2Label(): string;
        expanded_expanded(val?: any, force?: $mol_atom_force): any;
        Labeled_expanded(): $mol_check_expand;
        Empty_base(): $mol_check_expand;
        Empty_expanded(): $mol_check_expand;
        c5Label(): string;
        Disabled(): $mol_check_expand;
        sub(): any[];
    }
}
declare namespace $ {
    class $mol_check_icon_demo extends $mol_row {
        title(): string;
        Base_icon(): $mol_icon_microphone;
        base_checked(val?: any, force?: $mol_atom_force): any;
        Base(): $mol_check_icon;
        Checked_icon(): $mol_icon_microphone;
        checked_checked(val?: any, force?: $mol_atom_force): any;
        Checked(): $mol_check_icon;
        Disabled_icon(): $mol_icon_microphone;
        Disabled(): $mol_check_box;
        sub(): any[];
    }
}
declare namespace $ {
    class $mol_code_demo extends $mol_row {
        title(): string;
        qr(): $mol_code;
        matrix(): $mol_code;
        upc_e(): $mol_code;
        upc_a(): $mol_code;
        ean_8(): $mol_code;
        ean_13(): $mol_code;
        code_128(): $mol_code;
        code_39(): $mol_code;
        itf(): $mol_code;
        sub(): any[];
    }
}
declare namespace $ {
    const $mol_colors: {
        aliceblue: string;
        antiquewhite: string;
        aqua: string;
        aquamarine: string;
        azure: string;
        beige: string;
        bisque: string;
        black: string;
        blanchedalmond: string;
        blue: string;
        blueviolet: string;
        brown: string;
        burlywood: string;
        cadetblue: string;
        chartreuse: string;
        chocolate: string;
        coral: string;
        cornflowerblue: string;
        cornsilk: string;
        crimson: string;
        cyan: string;
        darkblue: string;
        darkcyan: string;
        darkgoldenrod: string;
        darkgray: string;
        darkgreen: string;
        darkgrey: string;
        darkkhaki: string;
        darkmagenta: string;
        darkolivegreen: string;
        darkorange: string;
        darkorchid: string;
        darkred: string;
        darksalmon: string;
        darkseagreen: string;
        darkslateblue: string;
        darkslategrey: string;
        darkturquoise: string;
        darkviolet: string;
        deeppink: string;
        deepskyblue: string;
        dimgray: string;
        dimgrey: string;
        dodgerblue: string;
        firebrick: string;
        floralwhite: string;
        forestgreen: string;
        fuchsia: string;
        gainsboro: string;
        ghostwhite: string;
        gold: string;
        goldenrod: string;
        gray: string;
        green: string;
        greenyellow: string;
        grey: string;
        honeydew: string;
        hotpink: string;
        indianred: string;
        indigo: string;
        ivory: string;
        khaki: string;
        lavender: string;
        lavenderblush: string;
        lawngreen: string;
        lemonchiffon: string;
        lightblue: string;
        lightcoral: string;
        lightcyan: string;
        lightgoldenrodyellow: string;
        lightgray: string;
        lightgreen: string;
        lightgrey: string;
        lightpink: string;
        lightsalmon: string;
        lightseagreen: string;
        lightskyblue: string;
        lightslategray: string;
        lightslategrey: string;
        lightsteelblue: string;
        lightyellow: string;
        lime: string;
        limegreen: string;
        linen: string;
        magenta: string;
        maroon: string;
        mediumaquamarine: string;
        mediumblue: string;
        mediumorchid: string;
        mediumpurple: string;
        mediumseagreen: string;
        mediumslateblue: string;
        mediumspringgreen: string;
        mediumturquoise: string;
        mediumvioletred: string;
        midnightblue: string;
        mintcream: string;
        mistyrose: string;
        moccasin: string;
        navajowhite: string;
        navy: string;
        oldlace: string;
        olive: string;
        olivedrab: string;
        orange: string;
        orangered: string;
        orchid: string;
        palegoldenrod: string;
        palegreen: string;
        paleturquoise: string;
        palevioletred: string;
        papayawhip: string;
        peachpuff: string;
        peru: string;
        pink: string;
        plum: string;
        powderblue: string;
        purple: string;
        rebeccapurple: string;
        red: string;
        rosybrown: string;
        royalblue: string;
        saddlebrown: string;
        salmon: string;
        sandybrown: string;
        seagreen: string;
        seashell: string;
        sienna: string;
        silver: string;
        skyblue: string;
        slateblue: string;
        slategray: string;
        slategrey: string;
        snow: string;
        springgreen: string;
        steelblue: string;
        tan: string;
        teal: string;
        thistle: string;
        tomato: string;
        turquoise: string;
        violet: string;
        wheat: string;
        white: string;
        whitesmoke: string;
        yellow: string;
        yellowgreen: string;
    };
}
declare namespace $ {
    class $mol_date extends $mol_string {
        type(): string;
        value_number(val?: any, force?: $mol_atom_force): any;
        value_moment(val?: any, force?: $mol_atom_force): any;
    }
}
declare namespace $.$mol {
    class $mol_date extends $.$mol_date {
        value(val?: string): string;
        value_moment(val?: $mol_time_moment): $mol_time_moment;
    }
}
declare namespace $ {
    class $mol_date_demo_moment extends $mol_row {
        date_label(): string;
        date(val?: any, force?: $mol_atom_force): any;
        Date(): $mol_date;
        Date_label(): $mol_labeler;
        formatted_label(): string;
        formatted(): string;
        Formatted(): $mol_view;
        Formatted_label(): $mol_labeler;
        sub(): any[];
    }
}
declare namespace $.$mol {
    class $mol_date_demo_moment extends $.$mol_date_demo_moment {
        formatted(): any;
    }
}
declare namespace $ {
    class $mol_date_demo_string extends $mol_row {
        date_label(): string;
        Date(): $mol_date;
        Date_label(): $mol_labeler;
        string_label(): string;
        date(val?: any, force?: $mol_atom_force): any;
        String(): $mol_string;
        String_label(): $mol_labeler;
        sub(): any[];
    }
}
declare namespace $ {
    class $mol_date_demo_timestamp extends $mol_row {
        date_label(): string;
        msec(val?: any, force?: $mol_atom_force): any;
        Date(): $mol_date;
        Date_label(): $mol_labeler;
        timestamp_label(): string;
        Msec(): $mol_number;
        Timestamp_label(): $mol_labeler;
        sub(): any[];
    }
}
declare namespace $ {
    class $mol_deck_demo extends $mol_row {
        title(): string;
        greeterLabel(): string;
        greeterMessage(): string;
        greeterMessager(): $mol_view;
        greeterContent(): $mol_row;
        greeterItem(): {
            "title": string;
            "Content": $mol_row;
        };
        questerLabel(): string;
        questerMessage(): string;
        questerMessager(): $mol_view;
        questerContent(): $mol_row;
        questerItem(): {
            "title": string;
            "Content": $mol_row;
        };
        commanderLabel(): string;
        commanderMessage(): string;
        commanderMessager(): $mol_view;
        commanderContent(): $mol_row;
        commanderItem(): {
            "title": string;
            "Content": $mol_row;
        };
        Deck(): $mol_deck;
        sub(): any[];
    }
}
declare namespace $ {
    class $mol_demo_medium extends $mol_demo {
    }
}
declare namespace $ {
    class $mol_demo_all extends $mol_view {
        name(): string;
        mediumLabel(): string;
        medium(): $mol_demo_medium;
        smallLabel(): string;
        small(): $mol_demo_small;
        largeLabel(): string;
        large(): $mol_demo_large;
        sub(): any[];
    }
}
declare namespace $ {
    let $mol_dict: typeof Map;
}
declare namespace $ {
    class $mol_dimmer_demo extends $mol_row {
        title(): string;
        one(): $mol_dimmer;
        two(): $mol_dimmer;
        three(): $mol_dimmer;
        four(): $mol_dimmer;
        five(): $mol_dimmer;
        six(): $mol_dimmer;
        sub(): any[];
    }
}
declare namespace $ {
    class $mol_expander extends $mol_list {
        expanded(val?: any, force?: $mol_atom_force): any;
        Label(): $mol_check_expand;
        content(): any[];
        Content(): $mol_view;
        rows(): any[];
    }
}
declare namespace $.$mol {
    class $mol_expander extends $.$mol_expander {
        rows(): ($mol_view | $.$mol_check_expand)[];
    }
}
declare namespace $ {
    class $mol_filler extends $mol_view {
        minimal_height(): number;
        sub(): any[];
    }
}
declare namespace $ {
    class $mol_expander_demo extends $mol_scroll {
        title(): string;
        Expander(): $mol_expander;
        sub(): any[];
    }
}
declare namespace $ {
    class $mol_float_demo extends $mol_scroll {
        title(): string;
        Head_content(): $mol_view;
        Head_row(): $mol_row;
        Head_card(): $mol_card;
        Head(): $mol_float;
        Filler1(): $mol_filler;
        Filler2(): $mol_filler;
        Content(): $mol_row;
        content(): any[];
        sub(): any[];
    }
}
declare namespace $ {
    class $mol_form_demo extends $mol_form {
        title(): string;
        loginLabel(): string;
        loginErrors(): any[];
        login(val?: any, force?: $mol_atom_force): any;
        loginControl(): $mol_string;
        loginField(): $mol_form_field;
        passwordLabel(): string;
        passwordErrors(): any[];
        password(val?: any, force?: $mol_atom_force): any;
        passControl(): $mol_string;
        passwordField(): $mol_form_field;
        form_fields(): any[];
        submit_text(): string;
        event_submit(val?: any, force?: $mol_atom_force): any;
        submit(): $mol_button_major;
        buttons(): any[];
    }
}
declare let $mol_global: any;
declare namespace $ {
    class $mol_grid_demo extends $mol_grid {
        title(): string;
        row_height(): number;
    }
}
declare namespace $.$mol {
    class $mol_grid_demo extends $.$mol_grid_demo {
        records(): string[][];
        col_head_content(id: string): string[];
    }
}
declare namespace $ {
    class $mol_pop_over extends $mol_pop {
        hovered(val?: any, force?: $mol_atom_force): any;
        showed(): any;
        attr(): {
            "tabindex": number;
        };
        event_show(event?: any, force?: $mol_atom_force): any;
        event_hide(event?: any, force?: $mol_atom_force): any;
        event(): {
            "mouseover": (event?: any) => any;
            "mouseout": (event?: any) => any;
        };
    }
}
declare namespace $.$mol {
    class $mol_pop_over extends $.$mol_pop_over {
        event_show(event?: MouseEvent): void;
        event_hide(event?: MouseEvent): void;
        showed(): any;
    }
}
declare namespace $ {
    class $mol_hint extends $mol_pop_over {
        bubble_content(): any[];
    }
}
declare namespace $ {
    class $mol_icon_chat extends $mol_icon {
        path(): string;
    }
}
declare namespace $ {
    class $mol_icon_demo extends $mol_row {
        title(): string;
        icons(): any[];
        sub(): any[];
    }
}
declare namespace $.$mol {
    class $mol_icon_demo extends $.$mol_icon_demo {
        names(): string[];
        icons(): $mol_view[];
        icon(name: string): $mol_view;
    }
}
declare namespace $ {
    class $mol_icon_file extends $mol_icon {
        path(): string;
    }
}
declare namespace $ {
    class $mol_icon_menu extends $mol_icon {
        path(): string;
    }
}
declare namespace $ {
    class $mol_icon_phones extends $mol_icon {
        path(): string;
    }
}
declare namespace $ {
    class $mol_icon_profile extends $mol_icon {
        path(): string;
    }
}
declare namespace $ {
    class $mol_import {
        static script(uri: string, next?: any, force?: $mol_atom_force): any;
    }
}
declare namespace $ {
    class $mol_labeler_demo extends $mol_row {
        title(): string;
        Provider(): $mol_labeler;
        user_name(val?: any, force?: $mol_atom_force): any;
        Name_control(): $mol_string;
        Name(): $mol_labeler;
        sub(): any[];
    }
}
declare namespace $ {
    class $mol_link_demo extends $mol_row {
        title(): string;
        This_label(): string;
        This(): $mol_link;
        Red_label(): string;
        Red(): $mol_link;
        Green_label(): string;
        Green(): $mol_link;
        Blue_label(): string;
        Blue(): $mol_link;
        External_hint(): string;
        External(): $mol_link;
        sub(): any[];
    }
}
declare namespace $ {
    class $mol_link_iconed_demo extends $mol_list {
        title(): string;
        name(val?: any, force?: $mol_atom_force): any;
        Input(): $mol_string;
        Output(): $mol_link_iconed;
        sub(): any[];
    }
}
declare namespace $ {
    class $mol_list_demo_empty extends $mol_list {
        title(): string;
        rows(): any[];
        empty_message(): string;
        Empty(): $mol_view;
    }
}
declare namespace $ {
    class $mol_list_demo_large extends $mol_scroll {
        title(): string;
        rows(): any[];
        lister(): $mol_list;
        sub(): any[];
        row_text(id: any): string;
        Content(id: any): $mol_filler;
        Row(id: any): $mol_expander;
    }
}
declare namespace $.$mol {
    class $mol_list_demo_large extends $.$mol_list_demo_large {
        rows(): $mol_view[];
        row_text(id: number): string;
    }
}
declare namespace $ {
    class $mol_map_yandex extends $mol_view {
        zoom(val?: any, force?: $mol_atom_force): any;
        center(val?: any, force?: $mol_atom_force): any;
    }
}
declare var ymaps: any;
declare namespace $.$mol {
    class $mol_map_yandex extends $.$mol_map_yandex {
        static api(): any;
        api(next?: any, force?: $mol_atom_force): any;
        update(event?: any): void;
        render(): void;
    }
}
declare namespace $ {
    class $mol_map_yandex_demo extends $mol_map_yandex {
        title(): string;
        center(val?: any, force?: $mol_atom_force): any;
        zoom(val?: any, force?: $mol_atom_force): any;
    }
}
declare namespace $ {
    function $mol_maybe<Value>(value: Value): Value[];
}
declare namespace $ {
    class $mol_meter_demo extends $mol_row {
        title(): string;
        top(): any;
        height(): any;
        Meter(): $mol_meter;
        plugins(): any[];
        Top(): $mol_view;
        Height(): $mol_view;
        sub(): any[];
    }
}
declare namespace $ {
    class $mol_nav_demo extends $mol_row {
        title(): string;
        selected_item(val?: any, force?: $mol_atom_force): any;
        Button(): $mol_button_minor;
        items(): any[];
        Nav(): $mol_nav;
        Labeler(): $mol_labeler;
        sub(): any[];
    }
}
declare namespace $ {
    class $mol_number_demo extends $mol_row {
        title(): string;
        zero(): $mol_number;
        year(val?: any, force?: $mol_atom_force): any;
        one(): $mol_number;
        two(): $mol_number;
        age(val?: any, force?: $mol_atom_force): any;
        three(): $mol_number;
        four(): $mol_number;
        five(): $mol_number;
        six(): $mol_number;
        seven(): $mol_number;
        eight(): $mol_number;
        nine(): $mol_number;
        sub(): any[];
    }
}
declare namespace $ {
    class $mol_page_demo extends $mol_page {
        title(): string;
        Button(): $mol_button_minor;
        tools(): any[];
        Text(): $mol_filler;
        Content(): $mol_row;
        body(): any[];
        Foot_text(): $mol_view;
        Foot_content(): $mol_row;
        foot(): any[];
    }
}
declare namespace $ {
    class $mol_perf_render extends $mol_view {
        title(): string;
        Title(): $mol_view;
        run_label(): string;
        event_run(val?: any, force?: $mol_atom_force): any;
        Run(): $mol_button_major;
        head(): any[];
        Head(): $mol_view;
        rows(): any[];
        List(): $mol_list;
        Content(): $mol_scroll;
        sub(): any[];
    }
}
declare namespace $ {
    class $mol_perf_render_row extends $mol_view {
        minimal_height(): number;
        selected(val?: any, force?: $mol_atom_force): any;
        attr(): {
            "mol_perf_render_row_selected": any;
        };
        event_toggle(val?: any, force?: $mol_atom_force): any;
        event(): {
            "click": (val?: any) => any;
        };
        label(): string;
        Bar(): $mol_view;
        sub(): any[];
    }
}
declare namespace $.$mol {
    interface $mol_perf_render_item {
        id: number;
        label: string;
    }
    class $mol_perf_render extends $.$mol_perf_render {
        run_label(next?: string): string;
        event_run(next?: Event): void;
        rows(): $mol_perf_render_row[];
        Row(id: number): $mol_perf_render_row;
        data(next?: $mol_perf_render_item[]): $mol_perf_render_item[];
        selected_item(next?: number): number;
    }
    class $mol_perf_render_row extends $.$mol_perf_render_row {
        data(): {
            id: number;
            label: string;
        };
        label(): string;
        event_toggle(next?: Event): void;
    }
}
declare namespace $ {
    class $mol_perf_sierp extends $mol_view {
        size_target(): number;
        elapsed(val?: any, force?: $mol_atom_force): any;
        transform(): string;
        style(): {
            "transform": string;
        };
        left(id: any): number;
        top(id: any): number;
        size(id: any): number;
        text(): string;
        Dot(id: any): $mol_perf_sierp_dot;
    }
}
declare namespace $ {
    class $mol_perf_sierp_dot extends $mol_view {
        size(): number;
        size_px(): string;
        hover(val?: any, force?: $mol_atom_force): any;
        text(): string;
        sub(): any[];
        width(): number;
        height(): number;
        left(): number;
        top(): number;
        radius(): number;
        color(): string;
        style(): {
            "width": number;
            "height": number;
            "left": number;
            "top": number;
            "borderRadius": number;
            "lineHeight": string;
            "background": string;
        };
        enter(val?: any, force?: $mol_atom_force): any;
        leave(val?: any, force?: $mol_atom_force): any;
        event_async(): {
            "mouseenter": (val?: any) => any;
            "mouseleave": (val?: any) => any;
        };
    }
}
declare namespace $.$mol {
    class $mol_perf_sierp extends $.$mol_perf_sierp {
        sub(): $.$mol_perf_sierp_dot[];
        data(): {
            left: number;
            top: number;
            size: number;
        }[];
        SierpinskiTriangle(id: {
            left: number;
            top: number;
            size: number;
        }): {
            left: number;
            top: number;
            size: number;
        }[];
        left(index: number): number;
        top(index: number): number;
        size(index: number): number;
        text(): string;
        transform(): string;
    }
    class $mol_perf_sierp_dot extends $.$mol_perf_sierp_dot {
        sub(): string[];
        size_px(): string;
        radius(): number;
        color(): "" | "#ff0";
        enter(next: Event): void;
        leave(next: Event): void;
    }
}
declare namespace $ {
    class $mol_perf_uibench extends $mol_scroll {
        page(): any;
        sub(): any[];
        stateTable(): any;
        table(): $mol_perf_uibench_table;
        stateAnim(): any;
        anim(): $mol_perf_uibench_anim;
        stateTree(): any;
        tree(): $mol_perf_uibench_tree;
    }
}
declare namespace $ {
    class $mol_perf_uibench_table extends $mol_list {
        state(): any;
        dom_name(): string;
        attr(): {
            "class": string;
        };
    }
}
declare namespace $ {
    class $mol_perf_uibench_table_row extends $mol_view {
        state(): any;
        minimal_height(): number;
        dom_name(): string;
        className(): string;
        id(): number;
        attr(): {
            "class": string;
            "data-id": number;
        };
        headerText(): string;
        header(): $mol_perf_uibench_table_cell;
        cells(): any[];
        sub(): any[];
    }
}
declare namespace $ {
    class $mol_perf_uibench_table_cell extends $mol_view {
        dom_name(): string;
        text(): string;
        attr(): {
            "class": string;
            "data-text": string;
        };
        event_click(val?: any, force?: $mol_atom_force): any;
        event(): {
            "click": (val?: any) => any;
        };
        sub(): any[];
    }
}
declare namespace $ {
    class $mol_perf_uibench_anim extends $mol_view {
        state(): any;
        attr(): {
            "class": string;
        };
        items(): any[];
        sub(): any[];
    }
}
declare namespace $ {
    class $mol_perf_uibench_anim_box extends $mol_view {
        id(): string;
        attr(): {
            "class": string;
            "data-id": string;
        };
        styleRadius(): string;
        styleColor(): string;
        style(): {
            "borderRadius": string;
            "background": string;
        };
        items(): any[];
        sub(): any[];
    }
}
declare namespace $ {
    class $mol_perf_uibench_tree extends $mol_view {
        state(): any;
        attr(): {
            "class": string;
        };
        stateRoot(): any;
        root(): $mol_perf_uibench_tree_branch;
        sub(): any[];
    }
}
declare namespace $ {
    class $mol_perf_uibench_tree_branch extends $mol_list {
        state(): any;
        dom_name(): string;
        attr(): {
            "class": string;
        };
    }
}
declare namespace $ {
    class $mol_perf_uibench_tree_leaf extends $mol_view {
        minimal_height(): number;
        dom_name(): string;
        attr(): {
            "class": string;
        };
        text(): string;
        sub(): any[];
    }
}
declare namespace $.$mol {
    class $mol_perf_uibench extends $.$mol_perf_uibench {
        state(next?: any): any;
        stateTable(): any;
        stateAnim(): any;
        stateTree(): any;
        page(): $mol_view;
    }
    class $mol_perf_uibench_table extends $.$mol_perf_uibench_table {
        state(): {
            items: any[];
        };
        rows(): $mol_perf_uibench_table_row[];
        rower(id: number): $mol_perf_uibench_table_row;
    }
    class $mol_perf_uibench_table_row extends $.$mol_perf_uibench_table_row {
        state(): {
            props: any[];
            active: boolean;
            id: number;
        };
        headerText(): string;
        id(): number;
        className(): string;
        cells(): $mol_perf_uibench_table_cell[];
        cell(id: number): $mol_perf_uibench_table_cell;
    }
    class $mol_perf_uibench_table_cell extends $.$mol_perf_uibench_table_cell {
        event_click(next?: Event): void;
    }
    class $mol_perf_uibench_anim extends $.$mol_perf_uibench_anim {
        state(): {
            items: any[];
        };
        items(): $mol_perf_uibench_anim_box[];
        item(i: number): $mol_perf_uibench_anim_box;
    }
    class $mol_perf_uibench_anim_box extends $.$mol_perf_uibench_anim_box {
        state(): {
            id: string;
            time: number;
        };
        id(): string;
        time(): number;
        styleRadius(): string;
        styleColor(): string;
    }
    class $mol_perf_uibench_tree extends $.$mol_perf_uibench_tree {
        state(): {
            root: any;
        };
        stateRoot(): any;
    }
    class $mol_perf_uibench_tree_branch extends $.$mol_perf_uibench_tree_branch {
        state(): {
            children: any[];
        };
        sub(): ($mol_perf_uibench_tree_leaf | $mol_perf_uibench_tree_branch)[];
        branch(i: number): $mol_perf_uibench_tree_branch;
        leaf(i: number): $mol_perf_uibench_tree_leaf;
    }
}
declare namespace $ {
    class $mol_plot_demo extends $mol_plot_pane {
        title(): string;
        count(val?: any, force?: $mol_atom_force): any;
        gap(): number;
        saturation_series(): any[];
        Saturation_fill(): $mol_plot_fill;
        Saturation_line(): $mol_plot_line;
        Saturation(): $mol_plot_group;
        input_series(): any[];
        Input_line(): $mol_plot_line;
        Input_dots(): $mol_plot_dot;
        Input(): $mol_plot_group;
        output_series(): any[];
        Output(): $mol_plot_bar;
        Voltage_title(): string;
        Voltage(): $mol_plot_ruler_vert;
        Time_title(): string;
        Time(): $mol_plot_ruler_hor;
        graphs(): any[];
    }
}
declare namespace $.$mol {
    class $mol_plot_demo extends $.$mol_plot_demo {
        input_series(): number[];
        output_series(): number[];
        saturation_series(): number[];
    }
}
declare namespace $ {
    class $mol_pop_demo extends $mol_row {
        title(): string;
        showed_value(val?: any, force?: $mol_atom_force): any;
        event_show(event?: any, force?: $mol_atom_force): any;
        show_text(): string;
        Show(): $mol_button_minor;
        bubble_hint(): string;
        event_hide(event?: any, force?: $mol_atom_force): any;
        hide_hint(): string;
        Hide(): $mol_button_minor;
        Content(): $mol_view;
        Pop(): $mol_pop;
        Align_title(): string;
        align_value(val?: any, force?: $mol_atom_force): any;
        align_left_top(): string;
        align_left_center(): string;
        align_left_bottom(): string;
        align_right_top(): string;
        align_right_center(): string;
        align_right_bottom(): string;
        align_center(): string;
        align_top_left(): string;
        align_top_center(): string;
        align_top_right(): string;
        align_bottom_left(): string;
        align_bottom_center(): string;
        align_bottom_right(): string;
        Align(): $mol_select;
        Align_block(): $mol_labeler;
        sub(): any[];
    }
}
declare namespace $.$mol {
    class $mol_pop_demo extends $.$mol_pop_demo {
        event_show(event?: MouseEvent): void;
        event_hide(event?: MouseEvent): void;
    }
}
declare namespace $ {
    class $mol_pop_over_demo extends $mol_row {
        title(): string;
        file_title(): string;
        open_title(): string;
        Open(): $mol_button_minor;
        export_title(): string;
        Export(): $mol_button_minor;
        save_title(): string;
        Save(): $mol_button_minor;
        File_menu(): $mol_list;
        File(): $mol_pop_over;
        help_title(): string;
        updates_title(): string;
        Updates(): $mol_button_minor;
        about_title(): string;
        About(): $mol_button_minor;
        Help_menu(): $mol_list;
        Help(): $mol_pop_over;
        sub(): any[];
    }
}
declare namespace $ {
    class $mol_portion_demo extends $mol_row {
        title(): string;
        fist(): number;
        Empty(): $mol_portion;
        second(): number;
        Partial(): $mol_portion;
        third(): number;
        Full(): $mol_portion;
        sub(): any[];
    }
}
declare namespace $ {
    class $mol_row_demo extends $mol_row {
        title(): string;
        minimal_height(): number;
        name_hint(): string;
        name(val?: any, force?: $mol_atom_force): any;
        suggest1(): string;
        suggest2(): string;
        Name(): $mol_search;
        count_hint(): string;
        count(val?: any, force?: $mol_atom_force): any;
        Count(): $mol_number;
        progress(): number;
        Progress(): $mol_portion;
        publish_label(): string;
        publish(val?: any, force?: $mol_atom_force): any;
        Publish(): $mol_check_box;
        drop_title(): string;
        Drop(): $mol_button_minor;
        sub(): any[];
    }
}
declare namespace $ {
    class $mol_scroll_demo extends $mol_scroll {
        title(): string;
        One(): $mol_filler;
        Two(): $mol_filler;
        Tree(): $mol_filler;
        Row(): $mol_row;
        sub(): any[];
    }
}
declare namespace $ {
    class $mol_search_demo extends $mol_row {
        title(): string;
        query(): any;
        suggests(): any[];
        Search(): $mol_search;
        sub(): any[];
    }
}
declare namespace $.$mol {
    class $mol_search_demo extends $.$mol_search_demo {
        suggests(): any[];
    }
}
declare namespace $ {
    class $mol_section_demo extends $mol_scroll {
        title(): string;
        Section(): $mol_section;
        Article(): $mol_row;
        sub(): any[];
    }
}
declare namespace $ {
    class $mol_select_demo_colors extends $mol_row {
        title(): string;
        color(val?: any, force?: $mol_atom_force): any;
        colors(): {};
        color_name(id: any): string;
        option_color(id: any): string;
        Color_preview(id: any): $mol_select_colors_color_preview;
        Color_row(id: any): $mol_row;
        option_content(id: any): any[];
        Color_select(): $mol_select;
        Color(): $mol_labeler;
        sub(): any[];
    }
}
declare namespace $ {
    class $mol_select_colors_color_preview extends $mol_view {
        color(): string;
        style(): {
            "background": string;
        };
    }
}
declare namespace $.$mol {
    class $mol_select_demo_colors extends $.$mol_select_demo_colors {
        color_name(id: string): string;
        option_color(id: string): any;
        colors(): {
            aliceblue: string;
            antiquewhite: string;
            aqua: string;
            aquamarine: string;
            azure: string;
            beige: string;
            bisque: string;
            black: string;
            blanchedalmond: string;
            blue: string;
            blueviolet: string;
            brown: string;
            burlywood: string;
            cadetblue: string;
            chartreuse: string;
            chocolate: string;
            coral: string;
            cornflowerblue: string;
            cornsilk: string;
            crimson: string;
            cyan: string;
            darkblue: string;
            darkcyan: string;
            darkgoldenrod: string;
            darkgray: string;
            darkgreen: string;
            darkgrey: string;
            darkkhaki: string;
            darkmagenta: string;
            darkolivegreen: string;
            darkorange: string;
            darkorchid: string;
            darkred: string;
            darksalmon: string;
            darkseagreen: string;
            darkslateblue: string;
            darkslategrey: string;
            darkturquoise: string;
            darkviolet: string;
            deeppink: string;
            deepskyblue: string;
            dimgray: string;
            dimgrey: string;
            dodgerblue: string;
            firebrick: string;
            floralwhite: string;
            forestgreen: string;
            fuchsia: string;
            gainsboro: string;
            ghostwhite: string;
            gold: string;
            goldenrod: string;
            gray: string;
            green: string;
            greenyellow: string;
            grey: string;
            honeydew: string;
            hotpink: string;
            indianred: string;
            indigo: string;
            ivory: string;
            khaki: string;
            lavender: string;
            lavenderblush: string;
            lawngreen: string;
            lemonchiffon: string;
            lightblue: string;
            lightcoral: string;
            lightcyan: string;
            lightgoldenrodyellow: string;
            lightgray: string;
            lightgreen: string;
            lightgrey: string;
            lightpink: string;
            lightsalmon: string;
            lightseagreen: string;
            lightskyblue: string;
            lightslategray: string;
            lightslategrey: string;
            lightsteelblue: string;
            lightyellow: string;
            lime: string;
            limegreen: string;
            linen: string;
            magenta: string;
            maroon: string;
            mediumaquamarine: string;
            mediumblue: string;
            mediumorchid: string;
            mediumpurple: string;
            mediumseagreen: string;
            mediumslateblue: string;
            mediumspringgreen: string;
            mediumturquoise: string;
            mediumvioletred: string;
            midnightblue: string;
            mintcream: string;
            mistyrose: string;
            moccasin: string;
            navajowhite: string;
            navy: string;
            oldlace: string;
            olive: string;
            olivedrab: string;
            orange: string;
            orangered: string;
            orchid: string;
            palegoldenrod: string;
            palegreen: string;
            paleturquoise: string;
            palevioletred: string;
            papayawhip: string;
            peachpuff: string;
            peru: string;
            pink: string;
            plum: string;
            powderblue: string;
            purple: string;
            rebeccapurple: string;
            red: string;
            rosybrown: string;
            royalblue: string;
            saddlebrown: string;
            salmon: string;
            sandybrown: string;
            seagreen: string;
            seashell: string;
            sienna: string;
            silver: string;
            skyblue: string;
            slateblue: string;
            slategray: string;
            slategrey: string;
            snow: string;
            springgreen: string;
            steelblue: string;
            tan: string;
            teal: string;
            thistle: string;
            tomato: string;
            turquoise: string;
            violet: string;
            wheat: string;
            white: string;
            whitesmoke: string;
            yellow: string;
            yellowgreen: string;
        };
    }
}
declare namespace $ {
    class $mol_select_demo_month extends $mol_row {
        title(): string;
        month(val?: any, force?: $mol_atom_force): any;
        months(): {
            "jan": string;
            "feb": string;
            "mar": string;
            "apr": string;
            "may": string;
            "jun": string;
            "jul": string;
            "aug": string;
            "sep": string;
            "oct": string;
            "nov": string;
            "dec": string;
        };
        Month_select(): $mol_select;
        Month(): $mol_labeler;
        sub(): any[];
    }
}
declare namespace $ {
    class $mol_select_demo_priority extends $mol_row {
        title(): string;
        priority(val?: any, force?: $mol_atom_force): any;
        Labeler(): $mol_labeler;
        sub(): any[];
    }
}
declare namespace $ {
    let $mol_set: typeof Set;
}
declare namespace $ {
    class $mol_speech_demo extends $mol_view {
        Toggle_icon(): $mol_icon_microphone;
        listening(val?: any, force?: $mol_atom_force): any;
        Toggle(): $mol_check_icon;
        message(): string;
        Message(): $mol_view;
        sub(): any[];
    }
}
declare namespace $.$mol {
    class $mol_speech_demo extends $.$mol_speech_demo {
        listening(next?: boolean): boolean;
        message(): string;
    }
}
declare namespace $ {
    class $mol_stack extends $mol_book {
        main(): any[];
        Main(): $mol_view;
        addon(): any[];
        Addon(): $mol_view;
        pages(): any[];
    }
}
declare namespace $ {
    class $mol_state_history<Value> extends $mol_object {
        static value<Value>(key: string, next?: Value): Value;
        prefix(): string;
        value(key: string, next?: Value): Value;
        static id(next?: string): string;
    }
}
declare namespace $ {
    class $mol_string_demo extends $mol_row {
        title(): string;
        name(val?: any, force?: $mol_atom_force): any;
        Simple(): $mol_string;
        Hint(): $mol_string;
        name2(val?: any, force?: $mol_atom_force): any;
        Filled(): $mol_string;
        Disabled(): $mol_string;
        sub(): any[];
    }
}
declare namespace $ {
    class $mol_suggest extends $mol_search {
        value(val?: any, force?: $mol_atom_force): any;
        query(val?: any, force?: $mol_atom_force): any;
    }
}
declare namespace $ {
    class $mol_switch_demo extends $mol_row {
        title(): string;
        color(val?: any, force?: $mol_atom_force): any;
        option_red(): string;
        option_green(): string;
        option_blue(): string;
        Enabled(): $mol_switch;
        Disabled(): $mol_switch;
        sub(): any[];
    }
}
declare namespace $ {
    function $mol_test(set: {
        [name: string]: string | (() => void);
    }): void;
    var $mol_test_all: $mol_test_case[];
    var $mol_test_run: () => void;
    class $mol_test_case {
        code: () => void;
        constructor(code: string | (() => void));
        run(): void;
    }
}
declare namespace $ {
    class $mol_text_demo extends $mol_scroll {
        title(): string;
        Text(): $mol_text;
        sub(): any[];
    }
}
declare namespace $ {
    type $mol_time_interval_config = string | {
        start?: $mol_time_moment_config;
        end?: $mol_time_moment_config;
        duration?: $mol_time_duration_config;
    };
    class $mol_time_interval extends $mol_time_base {
        constructor(config: $mol_time_interval_config);
        private _start;
        readonly start: $mol_time_moment;
        private _end;
        readonly end: $mol_time_moment;
        private _duration;
        readonly duration: $mol_time_duration;
        toJSON(): string;
        toString(): string;
    }
}
declare namespace $ {
    function $mol_try<Result>(handler: () => Result): Result | Error;
}
