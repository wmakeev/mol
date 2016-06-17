# $mol_atom

Атом - реактивный контейнер. Вычисляет своё значение по заданной функции, отслеживая при этом зависимости. Если зависимости меняются, то обновляет и своё значение. Обновление происходит каскадно, отложенно, по мере необходимости. Если в качестве значения возвращён свежесозданный [$mol_object](../object), то он будет уничтожен, когда атом по той или иной причине (обновление, уничтожение) потеряет ссылку на него.

Вместо прямой работы с атомами рекомендуется использовать декоратор [$mol_prop](../prop).