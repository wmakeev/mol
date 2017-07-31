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
