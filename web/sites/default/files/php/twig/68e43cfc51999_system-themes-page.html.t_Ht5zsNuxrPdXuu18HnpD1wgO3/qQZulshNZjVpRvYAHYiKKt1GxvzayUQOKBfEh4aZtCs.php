<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\CoreExtension;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;
use Twig\TemplateWrapper;

/* core/themes/stable9/templates/admin/system-themes-page.html.twig */
class __TwigTemplate_73f15291278bded0f4ca3c847c9b97ea extends Template
{
    private Source $source;
    /**
     * @var array<string, Template>
     */
    private array $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->extensions[SandboxExtension::class];
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        // line 31
        yield "<div";
        yield $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, ($context["attributes"] ?? null), "html", null, true);
        yield ">
  ";
        // line 32
        $context['_parent'] = $context;
        $context['_seq'] = CoreExtension::ensureTraversable(($context["theme_groups"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["theme_group"]) {
            // line 33
            yield "    ";
            // line 34
            $context["theme_group_classes"] = ["system-themes-list", ("system-themes-list-" . CoreExtension::getAttribute($this->env, $this->source,             // line 36
$context["theme_group"], "state", [], "any", false, false, true, 36)), "clearfix"];
            // line 40
            yield "    <div";
            yield $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, $context["theme_group"], "attributes", [], "any", false, false, true, 40), "addClass", [($context["theme_group_classes"] ?? null)], "method", false, false, true, 40), "html", null, true);
            yield ">
      <h2 class=\"system-themes-list__header\">";
            // line 41
            yield $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, CoreExtension::getAttribute($this->env, $this->source, $context["theme_group"], "title", [], "any", false, false, true, 41), "html", null, true);
            yield "</h2>
      ";
            // line 42
            $context['_parent'] = $context;
            $context['_seq'] = CoreExtension::ensureTraversable(CoreExtension::getAttribute($this->env, $this->source, $context["theme_group"], "themes", [], "any", false, false, true, 42));
            foreach ($context['_seq'] as $context["_key"] => $context["theme"]) {
                // line 43
                yield "        ";
                // line 44
                $context["theme_classes"] = [(((($tmp = CoreExtension::getAttribute($this->env, $this->source,                 // line 45
$context["theme"], "is_default", [], "any", false, false, true, 45)) && $tmp instanceof Markup ? (string) $tmp : $tmp)) ? ("theme-default") : ("")), (((($tmp = CoreExtension::getAttribute($this->env, $this->source,                 // line 46
$context["theme"], "is_admin", [], "any", false, false, true, 46)) && $tmp instanceof Markup ? (string) $tmp : $tmp)) ? ("theme-admin") : ("")), "theme-selector", "clearfix"];
                // line 51
                yield "        <div";
                yield $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, $context["theme"], "attributes", [], "any", false, false, true, 51), "addClass", [($context["theme_classes"] ?? null)], "method", false, false, true, 51), "html", null, true);
                yield ">
          ";
                // line 52
                if ((($tmp = CoreExtension::getAttribute($this->env, $this->source, $context["theme"], "screenshot", [], "any", false, false, true, 52)) && $tmp instanceof Markup ? (string) $tmp : $tmp)) {
                    // line 53
                    yield "            ";
                    yield $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, CoreExtension::getAttribute($this->env, $this->source, $context["theme"], "screenshot", [], "any", false, false, true, 53), "html", null, true);
                    yield "
          ";
                }
                // line 55
                yield "          <div class=\"theme-info\">
            <h3 class=\"theme-info__header\">";
                // line 57
                yield $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, CoreExtension::getAttribute($this->env, $this->source, $context["theme"], "name", [], "any", false, false, true, 57), "html", null, true);
                yield " ";
                yield $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, CoreExtension::getAttribute($this->env, $this->source, $context["theme"], "version", [], "any", false, false, true, 57), "html", null, true);
                // line 58
                if ((($tmp = CoreExtension::getAttribute($this->env, $this->source, $context["theme"], "notes", [], "any", false, false, true, 58)) && $tmp instanceof Markup ? (string) $tmp : $tmp)) {
                    // line 59
                    yield "                (";
                    yield $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->extensions['Drupal\Core\Template\TwigExtension']->safeJoin($this->env, CoreExtension::getAttribute($this->env, $this->source, $context["theme"], "notes", [], "any", false, false, true, 59), ", "));
                    yield ")";
                }
                // line 61
                yield "</h3>
            <div class=\"theme-info__description\">";
                // line 62
                yield $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, CoreExtension::getAttribute($this->env, $this->source, $context["theme"], "description", [], "any", false, false, true, 62), "html", null, true);
                yield "</div>
            ";
                // line 64
                yield "            ";
                if ((($tmp = CoreExtension::getAttribute($this->env, $this->source, $context["theme"], "incompatible", [], "any", false, false, true, 64)) && $tmp instanceof Markup ? (string) $tmp : $tmp)) {
                    // line 65
                    yield "              <div class=\"incompatible\">";
                    yield $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, CoreExtension::getAttribute($this->env, $this->source, $context["theme"], "incompatible", [], "any", false, false, true, 65), "html", null, true);
                    yield "</div>
            ";
                } else {
                    // line 67
                    yield "              ";
                    yield $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, CoreExtension::getAttribute($this->env, $this->source, $context["theme"], "operations", [], "any", false, false, true, 67), "html", null, true);
                    yield "
            ";
                }
                // line 69
                yield "          </div>
        </div>
      ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_key'], $context['theme'], $context['_parent']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 72
            yield "    </div>
  ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_key'], $context['theme_group'], $context['_parent']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 74
        yield "</div>
";
        $this->env->getExtension('\Drupal\Core\Template\TwigExtension')
            ->checkDeprecations($context, ["attributes", "theme_groups"]);        yield from [];
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName(): string
    {
        return "core/themes/stable9/templates/admin/system-themes-page.html.twig";
    }

    /**
     * @codeCoverageIgnore
     */
    public function isTraitable(): bool
    {
        return false;
    }

    /**
     * @codeCoverageIgnore
     */
    public function getDebugInfo(): array
    {
        return array (  141 => 74,  134 => 72,  126 => 69,  120 => 67,  114 => 65,  111 => 64,  107 => 62,  104 => 61,  99 => 59,  97 => 58,  93 => 57,  90 => 55,  84 => 53,  82 => 52,  77 => 51,  75 => 46,  74 => 45,  73 => 44,  71 => 43,  67 => 42,  63 => 41,  58 => 40,  56 => 36,  55 => 34,  53 => 33,  49 => 32,  44 => 31,);
    }

    public function getSourceContext(): Source
    {
        return new Source("", "core/themes/stable9/templates/admin/system-themes-page.html.twig", "/app/web/core/themes/stable9/templates/admin/system-themes-page.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = ["for" => 32, "set" => 34, "if" => 52];
        static $filters = ["escape" => 31, "safe_join" => 59];
        static $functions = [];

        try {
            $this->sandbox->checkSecurity(
                ['for', 'set', 'if'],
                ['escape', 'safe_join'],
                [],
                $this->source
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
