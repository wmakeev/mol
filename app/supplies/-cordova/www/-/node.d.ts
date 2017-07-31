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
